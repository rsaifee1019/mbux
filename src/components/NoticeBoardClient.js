"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NoticeBoardClient({notices}) {
  console.log("notices", notices);
    return <div>
        

        <div className=" p-6 ">
        <h2 className="text-2xl font-semibold text-text-red mb-4">নোটিশ বোর্ড</h2>
        <ul className="space-y-2">
        {notices.map((notice) => (
            <li className='text-text-black' key={notice.id}>
              <Link href={`/notices/${notice.id}`}>{notice.title}</Link>
              {/* Display the dateUploaded underneath the notice title */}
              <div className="text-xs text-gray-500">{new Date(notice.dateUploaded).toLocaleDateString('bn-BD', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</div>
            </li>
        ))}
        </ul>
        <Button className="mt-4" onClick={() => router.push('/notices')}>সব নোটিশ দেখুন</Button>
      </div>
    </div>
}
