import React from "react";

function Calendar({ days, dates }) {
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
