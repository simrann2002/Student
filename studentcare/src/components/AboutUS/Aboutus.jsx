import React from "react";
import Cards from "../Profilecard/Cards";
import "./aboutus.css";
import sanjana from "./sanjana.jpg"
import radhey from "./radhey.jpg"
import simran from "./simran.jpg"
import vinit from "./vinit.jpg"

function Aboutus() {
  const data = [
    {
      name: "Simran Godhwani",
      github: "https://github.com/simrann2002",
      linkedin: "https://www.linkedin.com/in/simran-godhwani-11a8091bb/",
      instagram: "https://www.instagram.com/_simran_godhwani/",
      img: simran
    },
    {
      name: "Vinit Verulkar",
      github: "",
      linkedin: "",
      instagram: "",
        img: vinit
    },
    {
      name: "Sanjana Dhote",
      github: "",
      linkedin: "",
      instagram: "",
      img: sanjana
    },
    {
      name: "Radhey Saykar",
      github: "",
      linkedin: "",
      instagram: "",
      img: radhey
    },
  ];
  return (
    <div className="container aboutuspage">
      <h3>Developers</h3>
      <div className="profilecards">
        {data.map((d) => (
          <Cards data={d} />
        ))}
      </div>
    </div>
  );
}

export default Aboutus;
