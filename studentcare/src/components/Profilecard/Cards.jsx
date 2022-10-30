import React from "react";
import "./cards.css";

function Cards({ data }) {
  return (
    <div>
      <div className="profilecard">
        <div className="profilecardimg">
          <img src={data.img} alt="" />
        </div>
        <div className="profilecardname">
          <p>
            {data.name}
            <br />
            CSE
          </p>
        </div>
        <div className="links">
          <a href={data.github}>
            <i class="fa-brands fa-github"></i>
          </a>
          <a href={data.linkedin}>
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href={data.instagram}>
            <i class="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
