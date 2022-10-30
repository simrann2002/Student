import React, { useEffect, useState } from "react";
import "./hostel.css";
import Hostelcard from "./Hostelcard";
import hostelA from "./hostelA.jpg";
import hostelB from "./hostelB.jpg";
import hostelC from "./hostelC.jpg";
import axios from "axios";
import HostelFeedback from "../Feedbacks/HostelFeedback";
import MessFeedback from "../Feedbacks/MessFeedback";
function Hostel() {
  const [details, setDetails] = useState([]);
  const [showmess, setShowmess]= useState(false);
  const [hostels, setHostels]= useState(false);
  const images = [
    hostelA,
    hostelB,
    hostelC
  ]
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get("/api/beds/");
      setDetails(res.data);
    };
    fetchDetails();
  }, []);
  const handleMess = ()=>{
    setShowmess(true);
    setHostels(false);
  }
  const handleHostel = ()=>{
    setShowmess(false);
    setHostels(true);
  }
  return (
    <>
      <div className="boxcontainer container mt-4">
        <div className="twocards">
          <div className="hostelbox" onClick={handleHostel} >
            <div className="blur">
              <h2>Hostel</h2>
            </div>
          </div>
          <div className="hostelbox2" onClick={handleMess}>
            <div className="blur">
              <h2>Canteen</h2>
            </div>
          </div>
        </div>
        {hostels === true && <><div className="container hostelcontainer mt-5">
          {details.map((d,i)=>(

          <Hostelcard
            img={images[i++]}
            name={d.bedType}
            rent={d.rent}
            beds={d.bedsavailable}
          />
          ))}
        
        </div>
       <HostelFeedback/></>}
        {showmess=== true && <MessFeedback/>}
      </div>
    </>
  );
}

export default Hostel;
