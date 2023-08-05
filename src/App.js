import React from "react";
import './App.css';
// import Body from "./components/Body";
import Header from "./components/Header";
// import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}


export default App;
