import React, { useContext, useEffect, useState } from "react";
import userimg from "./userimg.webp";
import "./profile.css";
import Issues from "../Issues/Issues";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Profile() {
  const { user } = useContext(AuthContext);
  const [issues, setIssues] = useState([]);
  const [branch, setBranch] = useState(user.branch);
  const [year, setYear] = useState(user.year);
  const [room_no, setRoomno] = useState(user.room_no);
  const [mobileNo, setMobileno] = useState(user.mobileNo);

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
  const handleUpdate = async (req, res) => {
    const data = {
      branch,
      room_no,
      year,
      mobileNo,
      userId: user._id,
    };
    try {
      await axios.put("/api/auth/" + user._id, data);
      window.alert("Updated Successfully , Please Relogin to your account.");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container profilecontainer">
      <div className="settings">
        <i
          class="fa-solid fa-gear"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        ></i>
      </div>
      <div className="profilebox">
        <div className="profileimg">
          <img src={userimg} alt="" />
        </div>
        <p style={{ textAlign: "center" }}>
          {user.fullName} <br />
          {user.email}{" "}
        </p>
        {/* <br />Room no: 983 <br />
            Year : SE <br />+91-929328923  */}
      </div>
      <div className="personalissues">
        <div className="container issueheading">
          <h2>Issues</h2>
        </div>
        {issues.length !== 0 ? (
          issues.map((m) => m.userId === user._id && <Issues issue={m} />)
        ) : (
          <div className="noissues">
            <h1>No Issues Yet</h1>
          </div>
        )}
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="infodiv">
                <label htmlFor="">Branch</label>
                <select
                  name=""
                  id=""
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option>
                    {user.branch === undefined
                      ? "Select Branch Name"
                      : user.branch}
                  </option>

                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ENTC">ENTC</option>
                </select>
                <br />
                <label htmlFor="">Year</label>
                <select
                  name=""
                  id=""
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option>
                    {user.year === undefined ? "Select Year" : user.year}
                  </option>

                  <option value="FE">FE</option>
                  <option value="SE">SE</option>
                  <option value="TE">TE</option>
                  <option value="BE">BE</option>
                </select>
                <br />
                <label htmlFor="">Room no.</label>
                <input
                  type="number"
                  placeholder={user.room_no}
                  defaultValue={user.room_no}
                  onChange={(e) => setRoomno(e.target.value)}
                />
                <br />
                <label htmlFor="">Mobile No.</label>
                <input
                  type="text"
                  placeholder={user.mobileNo}
                  name=""
                  id=""
                  defaultValue={user.mobileNo}
                  onChange={(e) => setMobileno(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
