import { Payment, Fee } from '../../../models';
import { authMiddleware } from '../../../utils/authMiddleware';
import { sequelize } from '../../../config/database';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { studentId } = req.user;
  const { amount, paymentMethod, feeId } = req.body;

  if (!amount || !paymentMethod || !feeId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transaction = await sequelize.transaction();

  try {
    const payment = await Payment.create(
      {
        studentId,
        amount,
        paymentMethod,
        status: 'completed',
      },
      { transaction }
    );

    const fee = await Fee.findByPk(feeId, { transaction });

    if (!fee) {
      throw new Error('Fee not found');
    }

    if (fee.status === 'paid') {
      throw new Error('Fee already paid');
    }

    fee.status = 'paid';
    await fee.save({ transaction });

    await transaction.commit();

    res.status(201).json({ message: 'Payment successful', payment });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default authMiddleware(handler);
