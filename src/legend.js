import React from "react";

function Legend({ selectedCategory, setSelectedCategory }) {
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="legend">
      <div
        className={`legend-cell yellow ${
          selectedCategory === "Holiday" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("Holiday")}
      >
        Holiday
      </div>
      <div
        className={`legend-cell blue ${
          selectedCategory === "Work" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("Work")}
      >
        Work
      </div>
      <div
        className={`legend-cell green ${
          selectedCategory === "Errands" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("Errands")}
      >
        Errands
      </div>
      <div
        className={`legend-cell red ${
          selectedCategory === "Sick" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("Sick")}
      >
        Sick
      </div>
    </div>
  );
}

export default Legend;
