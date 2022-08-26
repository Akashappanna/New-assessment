import React from "react";
import DashBoardTime from "./DashBoardTime";

const DashBoardMain = ({ days, past, onSetPast, currentDay }) => {
  const presentWeekPast = (index) => {
    console.log(index);
    console.log(currentDay);
    if (index < currentDay) {
      onSetPast();
    }
  };

  return (
    <div className="dashboard-main">
      {days.map((day, index) => (
        <div
          className="dashboard-sub-main"
          key={index}
          onLoadCapture={presentWeekPast}
        >
          <div className="dashboard-Days">
            <div>{day}</div>
            <div>8/2</div>
          </div>
          <div className="dashboard-time">
            {!past && <DashBoardTime />}
            {past && <p>Past</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardMain;
