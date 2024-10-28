import React from 'react'

export default function FeeTable() {
  const feeData = [
    { id: '১', description: 'ভর্তি / পুনঃভর্তি ফি', amount: '৩০০' },
    { id: '২', description: 'সাহিত্য সংস্কৃতিক ফি', amount: '৫০' },
    { id: '৩', description: 'ল্যাবরেটরি ফি', amount: '১৫০' },
    { id: '৪', description: 'বিএনসিসি/  গার্লস গাইডস', amount: '৫০' },
    { id: '৫', description: 'কলেজ উন্নয়ন ফি', amount: '৪০০' },
    { id: '৬', description: 'লাইব্রেরী ফি', amount: '১০০' },
    { id: '৭', description: 'পরিচয় পত্র ফি', amount: '১০০' },
    { id: '৮', description: 'অভ্যন্তরীণ ক্রীড়া ও কমন রুম ফি', amount: '১৫০' },
    { id: '৯', description: 'ক্যাম্পাস ফি', amount: '১০০' },
    { id: '১০', description: 'সেমিনার ফি', amount: '১০০' },
    { id: '১১', description: 'ধর্মীয় অনুষ্ঠান ফি', amount: '৫০' },
    { id: '১২', description: 'কলেজ অধিভুক্তি /মুঞ্জুরী নবায়ন ফি', amount: '২০০' },
    { id: '১৩', description: 'দারিদ্র তহবিল ফি', amount: '৪০০' },
    { id: '১৪', description: 'চিকিৎসা ফি', amount: '১০০' },
    { id: '১৫', description: 'আবাসনভাড়া ফি', amount: '২০০' },
    { id: '১৬', description: 'প্রসংশাপত্র/প্রত্যয়নপত্র/চারিত্রিক সনদপত্র ফি', amount: '১০০' },
    { id: '১৭', description: 'বিদ্যুৎ, টেলিফোন, ইন্টারনেট ফি', amount: '১৫০' },
    { id: '১৮', description: 'বিবিধ ফি', amount: '৫০' },
    { id: '১৯', description: 'মোট ফি =', amount: '২৭৫০' },
    { id: '২০', description: '+ ১ মাসের বেতন', amount: '৩০০' },
    { id: '২১', description: '+ রেজিস্ট্রেশন ফি (শিক্ষাবোর্ড কর্তৃক নির্ধারিত ফি) (পরিবর্তন হতে পারে)', amount: '২৫০' },
    { id: '২২', description: 'অনলাইন বেতন ফি', amount: '৫০' },
    { id: '২৩', description: 'সর্বমোট মোট ফি =', amount: '৩৩৫০' },
  ]

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ক্রমিক নং</th>
            <th className="py-2 px-4 border-b">জমা/আদায়ের খাত</th>
            <th className="py-2 px-4 border-b">টাকা</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
              <td className="py-2 px-4 border-b text-right">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}