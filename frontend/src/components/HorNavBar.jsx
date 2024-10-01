import React from 'react';
import theme from "../assets/theme.svg";
import downArrow from "../assets/arrow_back_ios.svg";

const HorNavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "950px",
     
        backgroundColor: "rgba(52, 58, 64, 1)",
        width: "100%",  // Fixed width
        height: "40px",  // Fixed height
        color: "white",
      }}
    >
      {/* Brand name */}
      <div style={{ width: "120px", height: "20px",  padding:"10px", }}>
        <h2 style={{ margin: 0 }}>Onebox</h2>
      </div>

      {/* Workspace info */}
      <div
        style={{
          display: "flex",  padding:"5px",
            // Vertically align items in the workspace div
          width: "240px",
          gap:"10px",
          height: "25px",
        }}
      >
        <div style={{ marginRight: "8px" }}>
          <img src={theme} alt="Theme Icon" />
        </div>
        <div style={{ display: "flex"}}>
          Tim's Workspace
          <img src={downArrow} alt="Arrow Icon" style={{ marginLeft: "8px" }} />
        </div>
      </div>
    </div>
  );
};

export default HorNavBar;
