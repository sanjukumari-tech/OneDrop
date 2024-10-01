import HorNavBar from "./components/HorNavBar";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <Login/> */}
        <Navbar />
        <div>
          <HorNavBar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
