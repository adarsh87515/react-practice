import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
  function handleHexColor() {
    let h = "#";
    for (let i = 0; i < 6; i++) {
      h += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(h);
    setColor(h);
  }

  function handlergbColor() {
    console.log("rgb color");
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setColor(`rgb(${r},${g},${b})`);
    console.log(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        color: "white",
        display: "flex",
        flexDirection: "column", // Arrange buttons and color vertically
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{
            margin: "10px",
            border: "2px solid white",
            padding: "5px",
          }}
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          style={{
            margin: "10px",
            border: "2px solid white",
            padding: "5px",
          }}
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          style={{
            margin: "10px",
            border: "2px solid white",
            padding: "5px",
          }}
          onClick={typeOfColor === "hex" ? handleHexColor : handlergbColor}
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          fontSize: "2rem", // Make the text larger
          fontWeight: "bold", // Bold text
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default RandomColor;
