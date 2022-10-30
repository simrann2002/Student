import React, { useContext } from "react";
// import { format } from "timeago.js";
import axios from "axios"
import 'animate.css';
import { AuthContext } from "../../context/AuthContext";
import "./issues.css";
import issuerimg from "./userimg.webp";
function Issues({ issue }) {
  const { user } = useContext(AuthContext);
  const handleUpdate = async()=>{
    const data = {
      isResolved : true
    }
    try{
      await axios.put("/api/issue/"+ issue._id, data);
      window.alert("Updated Successfully")
      window.location.reload();
    }
    catch(err){
      console.log(err)
    }
  }
  const handleDelete = async()=>{
     try{
       await axios.delete("/api/issue/"+issue._id);
       window.alert("Issue Deleted Successfully");
       window.location.reload();
     }
     catch(err){
       console.log(err);
     }
  }
  return (
    <div className="container issuescontainer mt-2">
      <div className="issuesbox animate__animated animate__fadeInLeft">
        <div className="issuername">
          <div className="issuerimg">
            <img src={issuerimg} alt="" /> {issue.fullName}
          </div>
         <div>
         {/* ({format(issue.createdAt)}) */}
          {user._id === issue.userId && <i class="fa-solid fa-trash" style={{marginLeft: "5px", cursor: "pointer"}} onClick={handleDelete}></i>}
         </div>
        </div>
        {user.isAdmin === true && <div className="issuerdetails">
          <p>Room No. {issue.room_no}</p>
          <p>Year : {issue.year}</p>
          <p>Branch : {issue.branch}</p>
          <p>Mobile no. {issue.mobileNo}</p>
        </div>}
        <div className="issuetext">
          <span style={{fontWeight: "600"}}>Category: {issue.category}</span> <br />
          {issue.issuetext}</div>
        <div className="issuestatus">
          {issue.isResolved === true ? "Resolved" : "Pending"}
          {user.isAdmin === true && issue.isResolved === false && (
            <button className="button-18" style={{ marginLeft: "5px" }} onClick={handleUpdate}>
              Resolved
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Issues;
