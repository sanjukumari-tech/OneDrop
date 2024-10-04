import React from "react";
import arrow from "../assets/arrow_back_ios.svg";
import dot from "../assets/dot.svg";
const MainMiddle = () => {
  return (
    <>
      <div
        style={{
          border: "1px sopd gray",
          color: "whitesmoke",
          height: "800",
          width: "800px",
          backgroundColor: "black",
        }}
      >
        <div style={{ display: "flex", gap: "190px" }}>
          <div style={{ height: "10px", width: "300px", marginLeft: "10px" }}>
            <h3>Orianda</h3> <p style={{marginTop:"-10px"}}>Orianda@gmail.com</p>
            <hr width="1000px" height="0px"/>
          </div>
          <div>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <p
                style={{
                  border:"1px sopd grey",borderRadius:"5px",backgroundColor:"gray",
                  color: "white",
                }}
              >
                meeting completed <img src={arrow} alt="" />
              </p>
              <p
                style={{
                  border:"1px solid grey",borderRadius:"5px",backgroundColor:"gray",
                  color: "white",marginLeft:"5px"
                }}
              >
              Move <img src={arrow} alt="" />
              </p>
              <p
                style={{
                  border:"1px sopd grey",borderRadius:"5px",backgroundColor:"gray",
                  color: "white",
                }}
              >
               <img src={dot} alt="" />
              </p>
            </div>
          </div>
         
        </div>

      </div>
     
    </>
  );
};

export default MainMiddle;
