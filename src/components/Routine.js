"use client"
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM'
];

const SCHEDULE_DATA = {
  'Math': { color: 'bg-sky-50', textColor: 'text-sky-900', duration: '8:00 AM – 8:45 AM' },
  'English': { color: 'bg-amber-50', textColor: 'text-amber-900', duration: '9:00 AM – 9:45 AM' },
  'Biology': { color: 'bg-purple-50', textColor: 'text-purple-900', duration: '10:00 AM – 10:45 AM' },
  'Physics': { color: 'bg-pink-50', textColor: 'text-pink-900', duration: '11:00 AM – 11:45 AM' },
  'Chemistry': { color: 'bg-teal-50', textColor: 'text-teal-900', duration: '1:00 PM – 1:45 PM' },
  'History': { color: 'bg-green-50', textColor: 'text-green-900', duration: '2:00 PM – 2:45 PM' }
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Routine() {
  const [selectedWeek, setSelectedWeek] = useState('August 12 – 16');

  const getClassForTimeSlot = (time, day) => {
    if (time === '8:00 AM') return 'Math';
    if (time === '9:00 AM') return 'English';
    if (time === '10:00 AM') return 'Biology';
    if (time === '11:00 AM') return 'Physics';
    if (time === '1:00 PM') return 'Chemistry';
    if (time === '2:00 PM') return 'History';
    return null;
  };

  const renderTimeSlot = (day, time) => {
    const className = getClassForTimeSlot(time, day);
    if (!className) return null;

    const classInfo = SCHEDULE_DATA[className];
    return (
      <div className={`p-3 rounded-lg ${classInfo.color} h-full`}>
        <div className={`text-sm font-medium ${classInfo.textColor}`}>
          {className}
        </div>
        <div className={`text-xs ${classInfo.textColor} opacity-75`}>
          {classInfo.duration}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{selectedWeek}</h2>
        <div className="flex gap-2">
          <button className="px-4 py-1 bg-indigo-100 text-indigo-900 rounded-md">
            Work Week
          </button>
          <button className="px-4 py-1 bg-gray-100 text-gray-600 rounded-md">
            Day
          </button>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <div className="text-gray-500 font-medium" />
        {TIME_SLOTS.map(time => (
          <div key={time} className="text-gray-700 font-medium text-center">
            {time}
          </div>
        ))}

        {DAYS.map(day => (
          <React.Fragment key={day}>
            <div className="text-gray-500 text-sm py-2">{day}</div>
            {TIME_SLOTS.map(time => (
              <div key={`${day}-${time}`} className="min-h-[80px]">
                {renderTimeSlot(day, time)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}