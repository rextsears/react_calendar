// Calendar.js

import React from "react";

function Calendar({ days, dates }) {
  // Create an array of date labels with both day and date
  const dateLabels = dates.map((date, index) => `${days[index % 7].name}\n${date}`);

  return (
    <div className="calendar">
      {dateLabels.map((label, index) => (
        <div key={index} className="cell">
          <div className="day-of-week">{label.split("\n")[0]}</div>
          <div className="date-number">{label.split("\n")[1]}</div>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
