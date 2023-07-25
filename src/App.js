import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Rick from "./pages/Rick";
import UsersList from "./pages/users/User";
import { useState, useContext } from "react";
import Setting from "./pages/Setting";
import { UserContext } from "./context/Context";

function App() {
  const [borderColor, setBorderColor] = useState("blue");
  const [textColor, setTextColor] = useState("blue");
  return (
    <UserContext.Provider value={{borderColor, textColor,setBorderColor,setTextColor}}>
      <BrowserRouter>
        <div
          className="all-main"
          style={{ color: textColor, border: `1px solid ${borderColor}` }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:userId" element={<UsersList />} />
            <Route path="/rick" element={<Rick />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
