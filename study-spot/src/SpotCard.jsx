import "./SpotCard.css";
import Library from "./assets/uni library.png";
import BlackScreen from "./assets/black screen.png";
import Map from "./assets/uni library maps.png";

function SpotCard({ name, directions, id }) {
  /*Need to handle opening hours modal*/

  return (
    <>
      <div className="card-container">
        {/* <img
          className="library-pic"
          src={Library}
          alt="university of birmingham library picture"
        /> */}
        <img className="black-screen" src={BlackScreen} alt="black screen" />

        <div className="bottom-half">
          <div className="spot-title">{name}</div>
          <p className="id">Requires ID {id}</p>
          <p className="hours">Click to see opening hours</p>
          <div className="directions">{directions}</div>
        </div>
      </div>
    </>
  );
}

export default SpotCard;
