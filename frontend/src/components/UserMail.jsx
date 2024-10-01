import React from 'react'

const UserMail = () => {
  return (
    <>
    <div style={{color:"white"}}>
    <div style={{display:"flex", marginTop:"-20px",gap:"30px"}}>
        <h2>Beta@gmail.com</h2>
        <p>Mar 7</p>
    </div>
    <p style={{marginTop:"-10px"}}>I've tried a lot and .</p>
    </div>
    <div style={{display:"flex",gap:"30px",marginTop:"-10px"}}>
        <h3 style={{color:"green", border:"1px solid gray",borderRadius:"5px",backgroundColor:"rgba(34, 36, 38, 1)",borderBlock:"none"}}>closed</h3>
        <h3 style={{color:"white", border:"1px solid gray",borderRadius:"5px",backgroundColor:"rgba(34, 36, 38, 1)",borderBlock:"none"}}>Campaign Name</h3>
    </div>
    <hr />
    </>
  )
}

export default UserMail