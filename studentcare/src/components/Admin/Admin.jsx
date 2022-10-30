import axios from "axios";
import React, { useEffect, useState } from "react";
import Issues from "../Issues/Issues";
import "./admin.css";

function Admin() {
  const [issues, setIssues] = useState([]);
  const [showissues, setShowIssues] = useState(true);
  const [showBed, setShowbed] = useState(false);
  const [hostelType, setHostelType] = useState("");
  const [bedavailable, setBedavailabel] = useState(0);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await axios.get("/api/issue/");
      setIssues(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //   console.log(res.data);
    };
    fetchIssues();
  }, []);
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get("/api/beds/");
      setDetails(res.data);
      //   console.log(res.data);
    };
    fetchDetails();
  }, []);
  const handleUpdate = async () => {
    const data = {
      bedsavailable: bedavailable,
    };
    try {
      await axios.put("/api/beds/" + hostelType, data);
      window.alert("Updated Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleShowbed = () => {
    setShowbed(true);
    setShowIssues(false);
  };
  const handleShowissue = () => {
    setShowbed(false);
    setShowIssues(true);
  };
  return (
    <div className="admincontainer">
      <div className="container issueheading mt-5">
        <h4 onClick={handleShowissue} style={{ cursor: "pointer" }}>
          Issues
        </h4>
        <h4>|</h4>
        <h4 onClick={handleShowbed} style={{ cursor: "pointer" }}>
          Hostel
        </h4>
      </div>
      <hr />
      <div className="adminissue">
        {showissues === true && issues.map((m) => <Issues issue={m} />)}
        {showBed === true && (
          <>
            <div className="container hostel">
              <div className="detailsform">
                <h3>Bed Availability Details</h3>
                <select
                  name=""
                  className="selectclass hostelcategory"
                  id=""
                  value={hostelType}
                  onChange={(e) => setHostelType(e.target.value)}
                >
                  <option value="">Select Hostel Type</option>
                  <option value="62809bca2a57b1d8aa4a6d9e">
                    Girls Hostel A
                  </option>
                  <option value="62809bd22a57b1d8aa4a6da0">
                    Girls Hostel B
                  </option>
                  <option value="62809bd82a57b1d8aa4a6da2">Boys Hostel</option>
                </select>
                <input
                  type="number"
                  className="bednumbers"
                  defaultValue={0}
                  value={bedavailable}
                  onChange={(e) => setBedavailabel(e.target.value)}
                />
                <center>
                  <button className="button-18 bedbtn" onClick={handleUpdate}>
                    Update
                  </button>
                </center>
              </div>
            </div>
            <table class="table container tablecontainer mt-3" >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Hostel Type</th>
                  <th scope="col">Beds Available</th>
                </tr>
              </thead>
              <tbody>
                {details.map((d,x)=>(

                  <tr>
                    <th scope="row">{x+1}</th>
                    <td>{d.bedType}</td>
                    <td>{d.bedsavailable}</td>
                  </tr>
                ))
                }
              
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;
