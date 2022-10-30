import React, { useEffect, useState } from "react";
import Hostel from "../Hostels/Hostel";
import Issues from "../Issues/Issues";
import Tophome from "../Tophome/Tophome";
import axios from "axios";
import "./homepage.css";

function Homepage() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const fetchIssues = async () => {
      const res = await axios.get("/api/issue/");
      setIssues(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchIssues();
  }, []);
  return (
    <div>
      <Tophome />
      <Hostel />
      <hr />
      <div className="container issueheading">
        <h2>Issues</h2>
      </div>
      {issues.length !== 0 ? (
        issues.map((m) => m.publically === true && <Issues issue={m} />)
      ) : (
        <div className="noissues">
          <h1>No Issues Yet</h1>
        </div>
      )}
    </div>
  );
}

export default Homepage;
