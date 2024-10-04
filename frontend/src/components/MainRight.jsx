import React from "react";
import mmail from "../assets/mmail.svg"; // Assuming the import
import OpenMailIcon from "../assets/open-mailIcon.svg"; // Assuming the import

const MainRight = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          color: "whitesmoke",
          height: "565px",
          width: "270px",
          fontFamily: "Open Sans",
          paddingLeft: "10px",
          backgroundColor: "rgba(0, 0, 0, 1)",
          overflowY: "auto",
        }}
      >
        {/* Lead Details */}
        <div>
          <h3
            style={{
              border: "10px solid grey",
              backgroundColor: "gray",
              padding: "2px",
              fontFamily: "Open Sans",
              borderRadius: "3px",
            }}
          >
            Lead Details
          </h3>
          <div style={{ display: "flex", gap: "90px", fontFamily: "Open Sans" }}>
            <span>Name</span>
            <span>Orlando</span>
          </div>
          <div style={{ display: "flex", gap: "60px", marginTop: "10px" }}>
            <span>Contact No</span>
            <span>+54-90628322343</span>
          </div>
          <div style={{ display: "flex", gap: "50px", marginTop: "10px" }}>
            <span>Email ID</span>
            <span>orlando@gmail.com</span>
          </div>
          <div style={{ display: "flex", gap: "50px", marginTop: "10px" }}>
            <span>Linkedin</span>
            <span>linkedin.com/in/timvade/</span>
          </div>
          <div style={{ display: "flex", gap: "50px", marginTop: "10px" }}>
            <span>Company Name</span>
            <span>Reachinbox</span>
          </div>
        </div>

        {/* Activities */}
        <h3
          style={{
            border: "10px solid grey",
            backgroundColor: "gray",
            padding: "2px",
            borderRadius: "3px",
            fontFamily: "Inter",
          }}
        >
          Activities
        </h3>
        <h4>Campaign Name</h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: "0 5px" }}>3 Steps</h4>
          <hr
            style={{
              width: "2px",
              height: "10px",
              margin: "0 3px",
              backgroundColor: "grey",
              border: "none",
            }}
          />
          <h4 style={{ margin: "0 0 0 2px" }}>5 Days in Sequence</h4>
        </div>

        {/* Step container with vertical line */}
        <div style={{ position: "relative", marginLeft: "15px" }}>
          {/* Vertical Line */}
          <div
            style={{
              position: "absolute",
              top: "5px", // Adjust the top position based on your need
              bottom: "0",
              left: "17px", // Adjust based on alignment
              width: "2px",
              backgroundColor: "gray",
              zIndex: "0", // Ensure the line is behind the images
            }}
          ></div>

          {/* Step 1 */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "20px", position: "relative", zIndex: "1" }}>
            <img src={mmail} alt="Mail Step 1" />
            <div style={{ display: "block", textAlign: "center" }}>
              <h4>Step 1: Email</h4>
              <div style={{ display: "flex", gap: "4px", marginTop: "-10px", height: "20px" }}>
                <img src="../src/assets/ssend.svg" alt="" /> sent 3rd, Feb
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "20px", position: "relative", zIndex: "1" }}>
            <img src={mmail} alt="Mail Step 2" />
            <div style={{ display: "block", textAlign: "center" }}>
              <h4>Step 2: Email</h4>
              <div style={{ display: "flex", gap: "4px", marginTop: "-10px", height: "20px" }}>
                <img src={OpenMailIcon} style={{ height: "10px", width: "30px" }} alt="open" />
                Opened 5th, Feb
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: "flex", gap: "4px", position: "relative", zIndex: "1" }}>
            <img src={mmail} alt="mail-icon" />
            <div style={{ display: "block", textAlign: "center" }}>
              <h4>Step 3: Email</h4>
              <div style={{ display: "flex", gap: "4px", marginTop: "-10px", height: "20px" }}>
                <img src={OpenMailIcon} style={{ height: "10px", width: "30px" }} alt="open mail icon" />
                sent 3rd, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRight;
