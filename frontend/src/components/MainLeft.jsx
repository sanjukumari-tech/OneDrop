import React from "react";
import arrowButton from "../assets/arrow_back_ios.svg";
import defaultt from "../assets/Default.svg";
import UserMail from "./UserMail";

const MainLeft = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          color: "whitesmoke",
          height: "565px", 
          minHeight: "400px", 
          fontStyle:"Open Sans",
          width: "270px",
          paddingLeft: "10px",
          backgroundColor: "rgba(0, 0, 0, 1)",
          overflowY: "auto", 
          
        }}
      >
        <div style={{ display: "flex",alignItems:"center"}}>
          <div style={{ display: "flex",justifyContent:"start",alignItems:"center",gap:"5px",width:"100%" }}>
            <h2 style={{ color: "blue" }}>ALL Inbox(s)</h2>
            <img
              src={arrowButton}
              alt=""
              height={12}
              width={12}
            />
          </div>
          <img src={defaultt} height={30} width={30} alt="search" />
        </div>
        <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
          <h2 style={{ marginTop: "0px",marginBottom: "0px" }}>25/25</h2>
          <p>Inboxes selected</p>
        </div>

        <div className="search">
          <div>
            <input
              type="text"
              placeholder="Search"
              style={{
                backgroundColor: "rgba(35, 39, 44, 1)",
                color: "white",
                border: "1px solid gray",
                borderRadius: "3px",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "40px"}}>
            <div style={{ display: "flex", gap: "5px" ,alignItems:"center" }}>
              <h3
                style={{
                  color: "blue",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                  height: "20px",
                  width:"20px",
                  display:'grid',
                  placeItems:"center",
                  fontSize:"12px",
                  
                }}
              >
                26
              </h3>
              <h5 style={{ color: "white"}}>New Replies</h5>
            </div>
            <div style={{ display: "flex", gap: "5px",alignItems:"center" }}>
              <h6>Newest</h6>
              <img src={arrowButton} height={10} width={10} alt="arrowbutton" />
            </div>
          </div>
        </div>
        <hr width="270px" />
        <UserMail />
        <UserMail />
        <UserMail />
        <UserMail />
      </div>
    </>
  );
};

export default MainLeft;
