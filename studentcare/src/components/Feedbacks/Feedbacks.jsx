import React from "react";
import "animate.css";
import issuerimg from "./userimg.webp";

function Feedbacks({ issue }) {
  console.log(issue.category);
  return (
    <div>
      <div className="container issuescontainer mt-2">
        <div className="issuesbox animate__animated animate__fadeInLeft">
          <div className="issuername">
            <div className="issuerimg">
              <img src={issuerimg} alt="" /> Anonymous
            </div>
          </div>
          <div className="issuetext">
            {issue.category !== undefined && (
              <>
                <span style={{ fontWeight: "600" }}>
                  Category: {issue.category}
                </span>
                <br />
              </>
            )}

            {issue.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;
