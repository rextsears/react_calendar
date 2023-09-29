import React, { useState } from "react";
import "./styles.css";
import Calendar from "./calendar";
import Legend from "./legend";

export default function App() {
  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    }
  ];

  const dates = Array.from({ length: 28 }, (x, i) => i + 1);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState([]);

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <Legend
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Calendar
        days={days}
        dates={dates}
        selectedCategory={selectedCategory}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </div>
  );
}
