import React from "react";
import MailIcon from "../assets/mail-icon.svg";
// import MailIcon from "../assets/mail-icon.svg";
import OpenMailIcon from "../assets/open-mailIcon.svg";
// import MailIcon from "../assets/mail-icon.svg";
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
          backgroundColor: " rgba(0, 0, 0, 1)",
          overflowY: "auto",
        }}
      >
        <div>
          <h3
            style={{
              border: "10x solid grey",
              backgroundColor: "gray",
              padding: "2px", fontFamily: 'Open Sans', 
              borderRadius: "3px",
            }}
          >
            {" "}
            Lead Details
          </h3>
          <div style={{ display: "flex", fontFamily: 'Open Sans',  gap: "90px" }}>
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
            <span>Comapny Name</span>
            <span>Reachinbox</span>
          </div>
        </div>

        <div></div>
        <h3
          style={{
            border: "10x solid grey",
            backgroundColor: "gray",
            padding: "2px",
            borderRadius: "3px",
             fontFamily: 'Inter', 
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
              height: "10px", // Height of the vertical line
              margin: "0 3px", // Very small space between text and line
              backgroundColor: "grey",
              border: "none",
            }}
          />
          <h4 style={{ margin: "0 0 0 2px" }}>5 Days in Sequence</h4>
        </div>
        <div style={{display:"flex",gap:"4px"}}>
          <img src="../src/assets/mmail.svg" alt="" />
          <div style={{display:"block", textAlign:"center"}}>
          <h4>Step 1:Email</h4>
          <div style={{display:"flex",gap:"4px",marginTop:"-10px",height:
            "20px"
          }}><img src="../src/assets/ssend.svg" alt="" /> sent 3rd,Feb</div>
          </div>
        </div>
        <div style={{display:"flex",gap:"4px"}}>
          <img src="../src/assets/mmail.svg" alt="" />
          <div style={{display:"block", textAlign:"center"}}>
          <h4>Step 2:Email</h4>
          <div style={{display:"flex",gap:"4px",marginTop:"-10px",height:
            "20px"
          }}><img src="../src/assets/open-mailIcon.svg"  style={{height:"10px" ,width:"30px"}} alt="" /> Opended 5th,Feb</div>
          </div>
        </div>
        <div style={{display:"flex",gap:"4px"}}>
          <img src="../src/assets/mmail.svg"  alt="" />
          <div style={{display:"block", textAlign:"center"}}>
          <h4>Step 3:Email</h4>
          <div style={{display:"flex",gap:"4px",marginTop:"-10px",height:
            "20px"
          }}><img src="../src/assets/open-mailIcon.svg"  style={{height:"10px" ,width:"30px"}} alt="" /> sent 3rd,Feb</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRight;
