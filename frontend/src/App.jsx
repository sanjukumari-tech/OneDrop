import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorNavBar from "./components/HorNavBar";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true); // Set initial state to false

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Route for the main application which requires login */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div style={{ display: "flex" }}>
                <Navbar />
                <div>
                  <HorNavBar />
                  <Main />
                </div>
              </div>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Add other routes here if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
