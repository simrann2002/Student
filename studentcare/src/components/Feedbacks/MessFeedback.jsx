import axios from "axios";
import React, { useState } from "react";
import "./feedbacks.css";

function MessFeedback() {
  const [text, setText ] = useState("");
  const [category, setCategory ] = useState("");

  const handleSubmit = async()=>{
    const data = {
      text,
      category
    }
    try{
      await axios.post("/api/messf/",data);
      window.alert("Updated Successfully")
      window.location.reload()
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <div className="hostelfeedback">
      <h4 style={{ textAlign: "center" }}>Feedback</h4>
      <select
        name=""
        className="selectclass"
        id=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Select
        </option>
        <option value={"Lunch"}>Lunch</option>
        <option value={"Dinner"}>Dinner</option>
      </select>
      <textarea name="" id="" cols="30" rows="5" onChange={(e)=>{setText(e.target.value)}}></textarea>
      <center>
        <button className="button-18" onClick={handleSubmit}>Submit</button>
      </center>
    </div>
  );
}

export default MessFeedback;
