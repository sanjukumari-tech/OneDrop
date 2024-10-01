// import React from 'react'
import home from "../assets/Home.svg";
import barChart from "../assets/bar_chart.svg"
import email1 from "../assets/email-1.svg"
import email2 from "../assets/email-2.svg"
import email from "../assets/email.svg"
import folder from "../assets/folder.svg";
import paperPlane from "../assets/paper-plane.svg";
import logo from "../assets/logo.svg";
import userLogo from "../assets/user-logo.svg";
const images= [home,barChart,email1,email2,email,folder,paperPlane]
const Navbar = () => {
  return (
    <div className='nav' style={{display:"flex",backgroundColor:"black", flexDirection:"column", width:"48px", height:"100vh",border:"1px solid gray"}}>
        <div  style={{height:"70px",display:"flex",justifyContent:"center"}}> <img src={logo}  alt="" height={32} width={32} /></div>
        <nav  style={{height:"100%"}}>
         <ul  style={{display:"flex",padding:"0",alignItems:"center",   
             gap:"20px",flexDirection:"column", height:"100%"}}>
         {images.map((image)=>{
          return ( <li key={image}>
            <img src={image} alt="nav-icons" height={30}  width={30}/>
           </li>)
         })}
         </ul>
        </nav>
        <div  style={{height:"50px", width:"20px",padding:"0px", marginRight:"10px"}}> <img src={userLogo} alt="" /></div>
        
    </div>
  )
}

export default Navbar