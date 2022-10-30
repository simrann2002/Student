import axios from "axios";
import React, { useState } from "react";
import "./feedbacks.css";

function HostelFeedback() {
  const [text, setText ] = useState("");

  const handleSubmit = async()=>{
    const data = {
      text
    }
    try{
      await axios.post("/api/hostelf/",data);
      window.alert("Updated Successfully")
      window.location.reload()
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <div >
      <h4 style={{ textAlign: "center" }}>Feedback</h4>
      <textarea name="" id="" cols="30" rows="5" onChange={(e)=>{setText(e.target.value)}}></textarea>
      <center>
        <button className="button-18" onClick={handleSubmit} >
          Submit
        </button>
      </center>
    </div>
  );
}

export default HostelFeedback;
