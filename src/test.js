import React, { useState } from "react";

function Test() {
  const outer = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  // Initialize `clicked` state as a 2D array filled with `false` values
  const [clicked, setClicked] = useState(
    outer.map((row) => row.map(() => false))
  );

  const handleSetClick = (row, index) => {
    setClicked((prev) => {
      const newClicked = prev.map((r) => [...r]);
      newClicked[row][index] = !newClicked[row][index];
      return newClicked;
    });
  };

  return (
    <div className="grid-container">
      {outer.map((item, row) => (
        <div key={row} className="grid-row">
          {item.map((node, index) => (
            <div
              key={index}
              className={`grid-cell ${node === 1 ? "active" : "inactive"}`}
              style={{
                backgroundColor: clicked[row][index] ? "#28a745" : "transparent",
              }}
              onClick={() => {
                if (node === 1) {
                  handleSetClick(row, index);
                }
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Test;
