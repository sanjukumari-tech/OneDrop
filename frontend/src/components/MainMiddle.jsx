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
            <h3>Orianda</h3>{" "}
            <p style={{ marginTop: "-10px" }}>Orianda@gmail.com</p>
            <hr width="1000px" height="0px" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <p
                style={{
                  border: "1px sopd grey",
                  borderRadius: "5px",
                  backgroundColor: "gray",
                  color: "white",
                }}
              >
                meeting completed <img src={arrow} alt="" />
              </p>
              <p
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  backgroundColor: "gray",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                Move <img src={arrow} alt="" />
              </p>
              <p
                style={{
                  border: "1px sopd grey",
                  borderRadius: "5px",
                  backgroundColor: "gray",
                  color: "white",
                }}
              >
                <img src={dot} alt="" />
              </p>
            </div>
          </div>
        </div>

        <div
          className="today"
          style={{
            justifyContent: "center",
            marginTop: "25px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "1px",
              backgroundColor: "gray",
              zIndex: 0,
            }}
          />
          <h4
            style={{
              border: "1px solid gray",
              textAlign: "center",
              height: "20px",
              width: "80px",
              borderRadius: "5px",
              backgroundColor: "gray",
              position: "relative", // Keep the h4 on top of the line
              // zIndex: 1, // Ensure it appears above the line
              margin: "0 auto", // Center horizontally
            }}
          >
            Today
          </h4>
        </div>

        <div className="sentMail" style={{height:"400px", width:"700px",border:"1px solid gray",margin:"10px 0px 0px 40px"}}>
          <div style={{display:"flex", gap:"600px",backgroundColor:"rgba(35,39,44,1)"}}> <p style={{marginLeft:"10px"}}>Reply</p> <img src="../src/assets/close.svg" alt="" /></div>
          <div style={{height:"40px", width:"700px",border:"1px solid gray",}}><p style={{marginLeft:"5px"}}>To : jeanne@cloud.com</p></div>
          <div style={{height:"40px", width:"700px",border:"1px solid gray"}}><p style={{marginLeft:"5px"}}>From : peter@reachinbox.com</p></div>
          <div  style={{height:"40px", width:"700px",border:"1px solid gray"}}><p style={{marginLeft:"5px"}}>Subject : Warmup Welcome</p></div>
          <div style={{height:"170px", width:"700px",border:"1px solid gray"}}> <p style={{marginLeft:"5px"}}>Hi jeanne,</p></div>
          <div style={{display:"flex",gap:"20px"}}>
             <div style={{display:"flex",marginTop:"5px",marginLeft:"5px", border:"1px solid",background: "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",height:"40px",width:"100px",borderRadius:"5px",borderColor:"transparent",textAlign:"center",justifyContent:"center",
}}><p>Send</p> <img src="src/assets/arrowDrop.svg"style={{marginTop:"5px"}} height={35} alt="belowArrow" /></div>
             <div style={{display:"flex"}}><img src="src/assets/thunder.svg" alt="" /> <p>Variables</p></div>
             <div style={{display:"flex",gap:"10px"}}> <img src="src/assets/eye.svg" alt="eyeIcon" /> <p>Preview Email</p></div>
             <div style={{display:"flex",gap:"15px"}}>
              <img src="src/assets/capitalA.svg" height={25} style={{marginTop:"10px",gap:"10px"}} alt="capitalA" />
              <img src="src/assets/paperClip.svg"height={25} style={{marginTop:"10px",gap:"10px"}}  alt="paperClip" />
              <img src="src/assets/scenary.svg" height={20}style={{marginTop:"10px",gap:"10px"}}  alt="scenary" />
              <img src="src/assets/smily.svg" height={20}style={{marginTop:"10px",gap:"10px"}}  alt="smily" />
              <img src="src/assets/peopleMinus.svg" height={20} style={{marginTop:"10px",gap:"10px"}} alt="peopleminus" />
              <img src="src/assets/arrowcloseOpen.svg"height={15} style={{marginTop:"10px",gap:"0px"}}  alt="closingandOpneingArrow" />
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMiddle;
