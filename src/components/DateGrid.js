// import axios from "axios";
// import { useEffect } from "react";
import DateBlock from "./DateBlock";

const DateGrid = ({ year, month, date, changeDate }) => {
  // const [scheduleList, setScheduleList] = useState([]);

  // useEffect(
  //   function () {
  //     getScheduleListByMonth();
  //   },
  //   [month,year]
  // );

  let rows = [];
  let colorArray = { 30: "purple", 31: "green" };
  let key = year % 4 === 0 ? 29 : 28;
  colorArray[key] = "yellow";

  const getScheduleListByMonth = async () => {
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
  };

  // const hasEvents = scheduleList.map((schedule) => {
  //   return new Date(schedule.date).getDate();
  // });

  for (let i = 1; i < 8; i++) {
    let columns = [];
    let k = i;
    for (let j = 1; j < 6; j++) {
      const dateValue = j > 1 ? (k = k + 7) : k;
      // const newClass =
      //   className + (hasEvents.indexOf(dateValue) !== -1 ? "has-events" : "");
      columns.push(
        <div
          key={dateValue}
          className={
            // newClass +
            "date-column text-" +
            (colorArray[dateValue] ? colorArray[dateValue] : " ") +
            (dateValue === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? " active" : "")
          }
        >
          <DateBlock
            key={dateValue}
            year={year}
            month={month}
            date={date}
            dateValue={dateValue}
            changeDate={changeDate}
            getScheduleListByMonth={getScheduleListByMonth}
          ></DateBlock>
        </div>
      );
    }
    rows.push(<div className="row" key={i}>{columns}</div>);
  }

  return (
    <div className="date-grid">
      {rows}
    </div>
  );
};

export default DateGrid;
