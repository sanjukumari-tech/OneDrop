import React from "react";
import arrowButton from "../assets/arrow_back_ios.svg";
import defaultt from "../assets/Default.svg";
import UserMail from "./UserMail";
const MainRight = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          color: "whitesmoke",
          height: "565px",
          width: "270px",
          paddingLeft: "10px",
          backgroundColor: " rgba(0, 0, 0, 1)",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", gap: "60px" }}>
          <div style={{ display: "flex" }}>
            <h2 style={{ color: "blue" }}>ALL Inbox(s) </h2>
            <img
              style={{ marginTop: "20px" }}
              src={arrowButton}
              alt=""
              height={12}
              width={12}
            />
          </div>

          <img src={defaultt} alt="" />
        </div>
        <div>
          <h2>25/25</h2> <p>Inboxes selected</p>
        </div>

        <div className="search">
          <div>
            <input type="text" placeholder="Search"  style={{ backgroundColor:"rgba(35, 39, 44, 1)",color:"white" , border:"1px solid gray" ,borderRadius:"3px"}}/>
          </div>
          <div  style={{ display: "flex",gap:"40px" }}>
          <div style={{ display: "flex",gap:"5px" }}>
            <h3
              style={{
                color: "blue",
                border: "1px solid gray",
                borderRadius: "50px",
                backgroundColor: "gray",
                height: "20px",
                
              }}
            >
              26
            </h3>
            <h3 style={{ color: "white" }}>New Replies</h3>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <h3>Newest</h3>
            <img src={arrowButton} alt="arrowbutton" />
          </div>
          </div>
        </div>
        <hr width="270px"/>
        <UserMail/>
        <UserMail/>
        <UserMail/>
        <UserMail/>
      </div>
    </>
  );
};

export default MainRight;
