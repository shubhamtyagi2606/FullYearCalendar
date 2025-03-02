import React, { useState } from "react";
import DateGrid from "./DateGrid";
import DayGrid from "./DayGrid";
import MonthGrid from "./MonthGrid";
import YearGrid from "./YearGrid";

const Calendar: React.FC = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [date, setDate] = useState(today.getDate());
  const changeYear = (updatedYear: number) => setYear(updatedYear);
  const changeMonth = (updatedMonth: number) => setMonth(updatedMonth);
  const changeDate = (updatedDate: number) => setDate(updatedDate);

  return (
    <div className="full-year-calendar-container">
      <div className="full-year-calendar-row full-year-calendar-upper-row">
        <YearGrid year={year} changeYear={changeYear} />
        <MonthGrid year={year} month={month} changeMonth={changeMonth} />
      </div>
      <div className="full-year-calendar-row full-year-calendar-lower-row">
        <DateGrid year={year} month={month} date={date} changeDate={changeDate} />
        <DayGrid year={year} month={month} date={date} />
      </div>
    </div>
  );
};

export default Calendar;