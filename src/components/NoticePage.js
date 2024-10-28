"use client"

export default function NoticePage({notices}) {
    return <div>
        {notices.map((notice) => (
            <div key={notice.id}>{notice.title}</div>
        ))}
    </div>
}