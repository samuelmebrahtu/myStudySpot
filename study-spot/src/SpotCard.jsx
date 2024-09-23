import "./SpotCard.css";
import Library from "./assets/uni library.png";
import BlackScreen from "./assets/black screen.png";
import Map from "./assets/uni library maps.png";

function SpotCard({ name, map }) {
  return (
    <>
      <div className="card-container">
        {/* <img
          className="library-pic"
          src={Library}
          alt="university of birmingham library picture"
        /> */}
        <img className="black-screen" src={BlackScreen} alt="black screen" />
        <h2 className="spot-title">{name}</h2>
        {/* <span className="opening-hours-title">Opening hours</span> */}
        <div className="location">
          <span className="location-title">Location</span>
          {/* <img
            className="location-library"
            src={Map}
            alt="university of birmingham library on google maps"
          /> */}
          <div
            style={{ width: "100%", height: "100%", border: "none" }}
            className="corner-wrapper"
          >
            {/* <iframe
              width="100%"
              height="240"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Main%20Library,%20University%20Of%20Birmingham,%20Birmingham%20B15%202TT+(University%20of%20Birmingham%20Library)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe> */}
            {map}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotCard;
