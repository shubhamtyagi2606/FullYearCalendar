import React, { useState } from "react";
import DateGrid from "./DateGrid";
import DayGrid from "./DayGrid";
import MonthGrid from "./MonthGrid";
import YearGrid from "./YearGrid";

const Calender = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());

  const changeYear = (updatedYear) => {
    setYear(updatedYear);
  };

  const changeMonth = (updatedMonth) => {
    setMonth(updatedMonth);
  };

  const changeDate = (updatedDate) => {
    setDate(updatedDate);
  };

  return (
    <div className="calander">
      <div className="upper-row row">
        <YearGrid year={year} changeYear={changeYear} />
        <MonthGrid year={year} month={month} changeMonth={changeMonth} />
      </div>
      <div className="lower-row row">
        <DateGrid year={year} month={month} date={date} changeDate={changeDate} />
        <DayGrid year={year} month={month} date={date} />
      </div>
    </div>
  );
};

export default Calender;