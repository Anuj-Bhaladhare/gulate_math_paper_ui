import React, { useState } from 'react';

const Dashboard = () => {
  const [dayValue, setDayValue] = useState('sunday');
  const [monthValue, setMonthValue] = useState('jan');
  const [name, setName] = useState('Anuj'); 

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  const dayToNameMap = {
    sunday: 'Anuj',
    monday: 'Ankur',
  };

  const handleDayChange = (e) => {
    const selectedDay = e.target.value;
    setDayValue(selectedDay);
    setName(dayToNameMap[selectedDay] || "No special name"); 
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form>
        <select value={dayValue} onChange={handleDayChange}>
          {days.map((day, index) => (
            <option key={index} value={day}>{day}</option>
          ))}
        </select>
        <br />
        <select value={monthValue} onChange={(e) => setMonthValue(e.target.value)}>
          {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
        <br />
        <p>Selected Name: {name}</p> 
      </form>
    </div>
  );
}

export default Dashboard;
