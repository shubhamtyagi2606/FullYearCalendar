// import axios from "axios";
// import { useEffect } from "react";
import DateBlock from "./DateBlock";

interface DateGridProps {
  year: number;
  month: number;
  date: number;
  changeDate: (date: number) => void;
}

const DateGrid: React.FC<DateGridProps> = ({ year, month, date, changeDate }) => {
  // const [scheduleList, setScheduleList] = useState([]);

  // useEffect(
  //   function () {
  //     getScheduleListByMonth();
  //   },
  //   [month,year]
  // );

  const rows = [];
  let colorArray: Record<number, string> = { 30: "purple", 31: "green" };
  const key = year % 4 === 0 ? 29 : 28;
  colorArray = { ...colorArray, [key]: "yellow" };

  // const getScheduleListByMonth = async () => {
    // await axios
    //   .get(
    //     `http://localhost:4001/api/v1/schedule/` +
    //       year +
    //       "-" +
    //       (month.toString().length > 1 ? month + 1 : "0" + (month + 1))
    //   )
    //   .then(({ data }) => {
    //     setScheduleList(data);
    //   });
  // };

  // const hasEvents = scheduleList.map((schedule) => {
  //   return new Date(schedule.date).getDate();
  // });

  for (let i = 1; i < 8; i++) {
    let columns = [];
    let k = i;
    for (let j = 1; j < 6; j++) {
      const dateValue: number = j > 1 ? (k = k + 7) : k;
      // const newClass =
      //   className + (hasEvents.indexOf(dateValue) !== -1 ? "has-events" : "");
      columns.push(
        <div
          key={dateValue}
          className={
            // newClass +
            "full-year-calendar-date-column " +
            (colorArray.hasOwnProperty(dateValue) ? "full-year-calendar-text-" + colorArray[dateValue] : "") +
            (dateValue === date ? " full-year-calendar-active" : "")
          }
        >
          <DateBlock
            key={dateValue}
            year={year}
            month={month}
            dateValue={dateValue}
            changeDate={changeDate}
          ></DateBlock>
        </div>
      );
    }
    rows.push(<div className="full-year-calendar-row" key={i}>{columns}</div>);
  }

  return (
    <div className="full-year-calendar-date-grid">
      {rows}
    </div>
  );
};

export default DateGrid;
