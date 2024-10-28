import { Fee } from '../../../models';
import { authMiddleware } from '../../../utils/authMiddleware';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { studentId } = req.user;

  try {
    const fees = await Fee.findAll({
      where: { studentId },
      order: [['dueDate', 'ASC']],
    });

    res.status(200).json(fees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default authMiddleware(handler);
