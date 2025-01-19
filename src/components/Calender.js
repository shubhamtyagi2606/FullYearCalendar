import { useState } from "react";
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
    <table>
      <tbody>
        <tr>
          <YearGrid year={year} changeYear={changeYear} />
          <MonthGrid year={year} month={month} changeMonth={changeMonth}/>
        </tr>
        <tr>
          <DateGrid year={year} month={month} date={date} changeDate={changeDate}/>
          <DayGrid />
        </tr>
      </tbody>
    </table>
  );
};

export default Calender;
