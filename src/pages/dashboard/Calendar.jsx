import React, { useState } from 'react';

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Get number of days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array to hold the days of the month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Create an array to hold the days of the week
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Split the daysArray into chunks of 7 (for each week)
  const weeks = daysArray.reduce((acc, curr, index) => {
    if (index % 7 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Calendar</h2>
      <table className="table-auto">
        <thead>
          <tr>
            {weekDays.map(day => (
              <th key={day} className="px-4 py-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map(day => (
                <td key={day} className="border px-4 py-2">{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
