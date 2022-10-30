import React from "react";


import "./tophome.css";

function Tophome() {
  const handlChange = ()=>{
    window.location.replace("/raiseissue")
  }
  return (
    <div className="tophome">
      <div className="tophomecontainer">
        <h1>Welcome to the PICT Student Care Portal</h1>

        <button className="button-18" onClick={handlChange} >
          Raise Issue
        </button>
      </div>
    </div>
  );
}

export default Tophome;
