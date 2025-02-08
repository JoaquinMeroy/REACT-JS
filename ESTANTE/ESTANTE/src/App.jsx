import { useEffect, useState } from "react";
import "./App.css";
import SideNav from "./SideNave";
import Home from "./Home";

function App() {
  return (
    <div className="flex">
      <SideNav></SideNav>
      <div className="flex-1 p-10">
      <Home></Home>
      </div>
    </div>
  );
}

export default App;
