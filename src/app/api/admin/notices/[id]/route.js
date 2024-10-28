import Notice from '@/models/Notice';
import { NextResponse } from 'next/server';
export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === 'GET') {
    try {
      const notice = await Notice.findByPk(id);
      if (!notice) return NextResponse.json({ message: 'Notice not found' }, { status: 404 });
      return NextResponse.json(notice, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to retrieve notice', error: error.message }, { status: 500 });
    }
  } else if (method === 'PUT') {
    try {
      const notice = await Notice.findByPk(id);
      if (!notice) return NextResponse.json({ message: 'Notice not found' }, { status: 404 });
      await notice.update(req.body);
      return NextResponse.json(notice, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to update notice', error: error.message }, { status: 500 });
    }
  } else if (method === 'DELETE') {
    try {
      const notice = await Notice.findByPk(id);
      if (!notice) return NextResponse.json({ message: 'Notice not found' }, { status: 404 });
      await notice.destroy();
      return NextResponse.json(null, { status: 204 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to delete notice', error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: `Method ${method} Not Allowed` }, { status: 405 });
  }
}
