import axios from "axios";
import { useEffect, useState } from "react";
import DateBlock from "./DateBlock";

const DateGrid = ({ year, month, date, changeDate }) => {
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(
    function () {
      getScheduleListByMonth();
    },
    [month,year]
  );

  let rows = [];
  let className = "date-columns columns ";
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

  const hasEvents = scheduleList.map((schedule) => {
    return new Date(schedule.date).getDate();
  });

  for (let i = 1; i < 8; i++) {
    let columns = [];
    let k = i;
    for (let j = 1; j < 6; j++) {
      const dateValue = j > 1 ? (k = k + 7) : k;
      const newClass =
        className + (hasEvents.indexOf(dateValue) !== -1 ? "has-events" : "");
      columns.push(
        <td
          key={dateValue}
          className={
            newClass +
            " text-" +
            (colorArray[dateValue] ? colorArray[dateValue] : "")
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
        </td>
      );
    }
    rows.push(<tr key={i}>{columns}</tr>);
  }

  return (
    <td className="date-grid">
      <table>
        <tbody>{rows}</tbody>
      </table>
    </td>
  );
};

export default DateGrid;
