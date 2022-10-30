import React from "react";

function Hostelcard({ img, name, rent , beds}) {
  return (
    <div>
      <div className="hostelcard">
        <div className="imgdiv">
          <img src={img} alt="" />
        </div>
        <div className="namediv">
          <a className="hostelname" href="/">
            {name}
          </a>
          <br />
          Rent: {rent}
          <br />
          Available Beds: {beds}
        </div>
      </div>
    </div>
  );
}

export default Hostelcard;
