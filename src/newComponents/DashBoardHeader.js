import React from "react";
//images
import arrowLeft from "../newComponents/assests/arrow-left.png";
import arrowRight from "../newComponents/assests/arrow-right.png";

const DashBoardHeader = ({ dateValue, newMonth, onPrev, onNext }) => {
  return (
    <React.Fragment>
      <header className="dashboard-header">
        <button type="button" onClick={onPrev}>
          <img src={arrowLeft} alt="arrow-left" className="left-arrow" />
          Previous Week
        </button>

        <div className="current-data">
          <p>{`${newMonth} ${dateValue.currentDate}, ${dateValue.year}`}</p>
        </div>

        <button type="button" onClick={onNext}>
          Next Week
          <img src={arrowRight} alt="arrow-right" className="right-arrow" />
        </button>
      </header>

      <section className="timeZone-section">
        <h3>Timezone : </h3>
        <select>
          <option value="cars">cars</option>
          <option value="bus">bus</option>
        </select>
      </section>
    </React.Fragment>
  );
};

export default DashBoardHeader;
