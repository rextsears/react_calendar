// Legend.js

import React from "react";

function Legend({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="legend">
      <div
        className={`legend-cell yellow ${selectedCategory === "Holiday" ? "selected" : ""}`}
        onClick={() => setSelectedCategory("Holiday")}
      >
        Holiday
      </div>
      <div
        className={`legend-cell blue ${selectedCategory === "Work" ? "selected" : ""}`}
        onClick={() => setSelectedCategory("Work")}
      >
        Work
      </div>
      <div
        className={`legend-cell green ${selectedCategory === "Errands" ? "selected" : ""}`}
        onClick={() => setSelectedCategory("Errands")}
      >
        Errands
      </div>
      <div
        className={`legend-cell red ${selectedCategory === "Sick" ? "selected" : ""}`}
        onClick={() => setSelectedCategory("Sick")}
      >
        Sick
      </div>
    </div>
  );
}

export default Legend;
