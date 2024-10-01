import { useState } from "react";
import HorNavBar from "./components/HorNavBar";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin  = ()=>{
    setLoggedIn(true);
  }
  return (
    <>
    {
      isLoggedIn ?(
       
        <div style={{ display: "flex" }}>
           { <Login/> }
          <Navbar />
          <div>
            <HorNavBar />
            <Main />
          </div>
        </div> 
      )
      :
      (
        <Login onLogin= {handleLogin}/>
      )
    }
    </>
  );
}

export default App;
