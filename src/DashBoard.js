import React, { useEffect, useState } from "react";
import DashBoardMain from "./newComponents/DashBoardMain";
import DashBoardHeader from "./newComponents/DashBoardHeader";



const DashBoard = () => {
  const months = [
    { name: "Jan", endDate: 31 },
    { name: "Feb", endDate: 28 },
    { name: "Mar", endDate: 31 },
    { name: "Apr", endDate: 30 },
    { name: "May", endDate: 31 },
    { name: "June", endDate: 30 },
    { name: "July", endDate: 31 },
    { name: "Aug", endDate: 30 },
    { name: "Sept", endDate: 31 },
    { name: "Oct", endDate: 30 },
    { name: "Nov", endDate: 31 },
    { name: "Dec", endDate: 30 },
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const date = new Date();
  //   console.log(months[date.getMonth()]);
  //   console.log(date.getDate());
  //   console.log(date.getFullYear());
  // console.log(days[date.getDay() - 1]);
  // console.log(date.getTimezoneOffset());

  const currentDateTime = {
    presentDate: date.getDate(),
    day: date.getDay() - 1,
    presentYear: date.getFullYear(),
    presentMonthIndex: date.getMonth(),
  };

  const { presentDate, presentYear, presentMonthIndex } = currentDateTime;

  const [dateTimeVal, setDateTimeVal] = useState({
    //month: months[date.getMonth()].name,
    currentDate: date.getDate(),
    year: date.getFullYear(),
    monthIndex: date.getMonth(),
  });
  const [newMonth, setNewMonth] = useState(months[date.getMonth()].name);

  const { currentDate, monthIndex, year } = dateTimeVal;

  console.log(dateTimeVal);
  console.log(currentDateTime);

  const [past, setPast] = useState(false);

  const previousWeekHandler = () => {
    setDateTimeVal((prevState) => {
      return {
        ...prevState,
        currentDate: prevState.currentDate - 7,
      };
    });
  };
  const nextWeekhandler = () => {
    setDateTimeVal((prevState) => {
      return {
        ...prevState,
        currentDate: prevState.currentDate + 7,
      };
    });
  };

  const updatePastHandler = () => {
    setPast(true);
    console.log(past);
  };

  useEffect(() => {
    // if (year === presentYear) {
    //   if (monthIndex <= presentMonthIndex) {
    //     setPast(true);
    //   } else if (monthIndex === presentMonthIndex) {
    //     if (currentDate < presentDate) {
    //       setPast(true);
    //     } else {
    //       setPast(false);
    //     }
    //   }
    // } else {
    //   setPast(false);
    // }

    // if (year < presentYear) {
    //   setPast(true);
    // }

    if (currentDate < presentDate && year <= presentYear) {
      if (monthIndex > presentMonthIndex) {
        setPast(false);
        return;
      }
      if (monthIndex < presentMonthIndex) {
        setPast(true);
        return;
      }
      setPast(true);
    } else {
      setPast(false);
    }

    if (currentDate < 1) {
      setDateTimeVal((prevState) => {
        return {
          ...prevState,
          monthIndex: dateTimeVal.monthIndex - 1,
        };
      });
    }
  }, [
    currentDate,
    presentDate,
    presentYear,
    presentMonthIndex,
    year,
    monthIndex,
    past,
  ]);

  useEffect(() => {
    if (monthIndex >= 0 && monthIndex <= 11) {
      setNewMonth(months[monthIndex].name);
    }

    //new one
    if (currentDate < 1) {
      setDateTimeVal((prevState) => {
        return {
          ...prevState,
          currentDate: months[monthIndex].endDate + (currentDate - 1),
        };
      });
    }

    //new one
    if (monthIndex >= 0 && monthIndex <= 11) {
      if (currentDate > months[monthIndex].endDate) {
        console.log(months[monthIndex].endDate);
        setDateTimeVal((prevState) => {
          return {
            ...prevState,
            monthIndex: dateTimeVal.monthIndex + 1,
            currentDate: 1,
          };
        });
      }
    }

    if (monthIndex > 11) {
      setDateTimeVal((prevState) => {
        return {
          ...prevState,
          year: prevState.year + 1,
          monthIndex: 0,
        };
      });
    }

    if (monthIndex < 0) {
      setDateTimeVal((prevState) => {
        return {
          ...prevState,
          year: prevState.year - 1,
          monthIndex: 11,
        };
      });
    }
  }, [monthIndex, months, currentDate]);

  return (
    <div className="dashboard">
      <DashBoardHeader
        dateValue={dateTimeVal}
        newMonth={newMonth}
        onPrev={previousWeekHandler}
        onNext={nextWeekhandler}
      />
      <DashBoardMain
        days={days}
        past={past}
        onSetPast={updatePastHandler}
        currentDay={currentDateTime.day}
      />
    </div>
  );
};

export default DashBoard;
