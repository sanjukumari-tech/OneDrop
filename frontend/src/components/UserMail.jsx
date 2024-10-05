import React from 'react'

const UserMail = () => {
  return (
    <>
    <div style={{color:"white"}}>
    <div style={{display:"flex", marginTop:"-20px",gap:"30px"}}>
        <h4>Beta@gmail.com</h4>
        <p>Mar 7</p>
    </div>
    <p style={{marginTop:"-10px"}}>I've tried a lot and .</p>
    </div>
    <div style={{display:"flex",gap:"30px",marginTop:"-10px"}}>
        <h4 style={{color:"green", border:"1px solid gray",borderRadius:"5px",backgroundColor:"rgba(34, 36, 38, 1)",borderBlock:"none"}}>closed</h4>
        <h4 style={{color:"white", border:"1px solid gray",borderRadius:"5px",backgroundColor:"rgba(34, 36, 38, 1)",borderBlock:"none",}}>Campaign Name</h4>
    </div>
    <hr />
    </>
  )
}

export default UserMail