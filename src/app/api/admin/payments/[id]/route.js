import Payment from '@/models/Payment';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === 'GET') {
    try {
      const payment = await Payment.findByPk(id);
      if (!payment) return res.status(404).json({ message: 'Payment not found' });
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve payment', error });
    }
  } else if (method === 'PUT') {
    try {
      const payment = await Payment.findByPk(id);
      if (!payment) return res.status(404).json({ message: 'Payment not found' });
      await payment.update(req.body);
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update payment', error });
    }
  } else if (method === 'DELETE') {
    try {
      const payment = await Payment.findByPk(id);
      if (!payment) return res.status(404).json({ message: 'Payment not found' });
      await payment.destroy();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete payment', error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
