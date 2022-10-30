import axios from "axios";
import React, { useEffect, useState } from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import "./feedbackpage.css"

function Feedbackpage() {
  const [showhostel, setShowhostel] = useState(true);
  const [showmess, setShowmess] = useState(false);

  const handleShowhostel = () => {
    setShowhostel(true);
    setShowmess(false);
  };
  const handleShowmess = () => {
    setShowhostel(false);
    setShowmess(true);
  };
  const [hostels, setHostels] = useState([]);
  const [mess, setMess] = useState([]);
  useEffect(() => {
    const fetchIssues = async () => {
      const hostel = await axios.get("/api/hostelf/");
      const mess = await axios.get("/api/messf/");
      setHostels(
        hostel.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      setMess(
        mess.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //   console.log(res.data);
    };
    fetchIssues();
  }, []);
  return (
    <div className="feedbackcontainer container">
      <div className="container issueheading mt-5">
        <h4 onClick={handleShowhostel} style={{ cursor: "pointer" }}>
          Hostel
        </h4>
        <h4>|</h4>
        <h4 onClick={handleShowmess} style={{ cursor: "pointer" }}>
          Mess
        </h4>
      </div>
        {showhostel === true && hostels.map((h)=>(
            <Feedbacks issue={h}/>
        ))}
        {showmess === true && mess.map((m)=>(
            <Feedbacks issue={m}/>
        ))}
    </div>
  );
}

export default Feedbackpage;
