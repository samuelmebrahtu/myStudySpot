import { useState } from "react";
import "./Homepage.css";
import { locations } from "./LocationList.jsx";

import SpotCard from "./SpotCard";
import GitHub from "./assets/github logo.svg";
import LinkedIn from "./assets/linkedin logo.svg";

function Homepage() {
  const [location, setLocation] = useState(locations[0]);
  // const [locationTitle, setLocationTitle] = useState(locations[0].name);

  const handleNewLocation = () => {
    setLocation(getRandomLocation());
  };

  const getRandomLocation = () => {
    return locations[Math.floor(Math.random() * locations.length)];
  };

  return (
    <>
      <div className="homepage-container">
        <div className="homepage-left">
          <div className="description-container">
            <h1>myStudySpot</h1>
            <p className="description">
              Press the button below to decide where to study next at the
              University of Birmingham!
            </p>
            <button onClick={handleNewLocation} className="spot-button">
              Find a Spot
            </button>
            <hr />
          </div>

          <div className="socials">
            <a href="www.linkedin.com/in/samuel-mebrahtu">
              <img className="linkedin" src={LinkedIn} alt="linkedin logo" />
            </a>
            <a href="www.github.com/samuelmebrahtu">
              <img src={GitHub} alt="github logo" />
            </a>
          </div>
        </div>

        <SpotCard name={location.name} map={location.map} />
      </div>
    </>
  );
}

export default Homepage;
