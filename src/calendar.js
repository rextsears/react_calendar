import React, { useState, useEffect } from "react";

function Calendar({ days, dates, selectedCategory }) {
  const dateLabels = dates.map(
    (date, index) => `${days[index % 7].name}\n${date}`
  );
  const [selectedDates, setSelectedDates] = useState([]);
  const [dateColors, setDateColors] = useState({});

  useEffect(() => {
    if (selectedCategory) {
      const newDateColors = { ...dateColors };
      selectedDates.forEach((dateLabel) => {
        if (!newDateColors[dateLabel]) {
          newDateColors[dateLabel] = getColorForCategory(selectedCategory);
        }
      });
      setDateColors(newDateColors);
    }
  }, [selectedCategory, selectedDates]);

  const handleDateClick = (dateLabel) => {
    if (!selectedCategory) {
      return;
    }

    setSelectedDates((prevSelectedDates) => {
      if (prevSelectedDates.includes(dateLabel)) {
        const newSelectedDates = prevSelectedDates.filter(
          (date) => date !== dateLabel
        );
        const newDateColors = { ...dateColors };
        if (selectedCategory === "Holiday") {
          delete newDateColors[dateLabel];
        } else {
          newDateColors[dateLabel] = getColorForCategory(selectedCategory);
        }
        setDateColors(newDateColors);
        return newSelectedDates;
      } else {
        const newDateColors = { ...dateColors };
        if (!newDateColors[dateLabel] && selectedCategory) {
          newDateColors[dateLabel] = getColorForCategory(selectedCategory);
        }
        setDateColors(newDateColors);
        return [...prevSelectedDates, dateLabel];
      }
    });
  };

  return (
    <div className="calendar">
      {dateLabels.map((label, index) => {
        const isSelected = selectedDates.includes(label);
        const isHoliday = selectedCategory === "Holiday";
        const backgroundColor = isSelected
          ? dateColors[label] || ""
          : "";

        return (
          <div
            key={index}
            className={`cell ${isSelected ? "selected" : ""}`}
            onClick={() => handleDateClick(label)}
            style={{ backgroundColor }}
          >
            <div className="day-of-week">{label.split("\n")[0]}</div>
            <div className="date-number">{label.split("\n")[1]}</div>
          </div>
        );
      })}
    </div>
  );
}

function getColorForCategory(category) {
  switch (category) {
    case "Holiday":
      return "#bf9000";
    case "Work":
      return "blue";
    case "Errands":
      return "green";
    case "Sick":
      return "red";
    default:
      return "";
  }
}

export default Calendar;
