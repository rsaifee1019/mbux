import { Payment } from '../../../models';
import { authMiddleware } from '../../../utils/authMiddleware';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { studentId } = req.user;

  try {
    const payments = await Payment.findAll({
      where: { studentId },
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default authMiddleware(handler);
