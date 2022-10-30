import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./createissue.css";

function Createissue() {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [publically, setPublically] = useState(false);
  const { user } = useContext(AuthContext);

  const handlePost = async () => {
    // var q1 = document.getElementById("publically").value;
    // setPublically(q1);
    console.log(publically);
    const data = {
      fullName: user.fullName,
      userId: user._id,
      category,
      issuetext: text,
      publically,
      room_no: user.room_no,
      branch: user.branch,
      year: user.year,
      mobileNo: user.mobileNo,
    };
    if (text === "" || category === "") {
      window.alert("All fields are require");
    } else {
      try {
        await axios.post("/api/issue/", data);
        window.alert("Issue Raised Successfully");
        window.location.replace("/");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleSend = () => {
    window.alert("Please Update your details in the settings");
    window.location.replace("/profile");
  };
  return (
    <>
      <div className="container issuecontainer">
        <div className="issuebox">
          <h2>Raise Issue</h2>
          <br />
          <select
            name=""
            className="selectclass"
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Hostel">Hostel</option>
            <option value="Mess">Mess</option>
          </select>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <br />
          <p>
            Make it publically{" "}
            <select
              name=""
              className="selectclass2"
              id=""
              value={publically}
              onChange={(e) => setPublically(e.target.value)}
            >
              <option value="" disabled>
                Yes
              </option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </p>
          <center>
            <button
              className="button-18"
              onClick={user.mobileNo === undefined ? handleSend : handlePost}
            >
              Submit
            </button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Createissue;
