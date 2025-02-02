const DayGrid = ({ year, month, date }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let rows = [];
  for (let i = 0; i < days.length; i++) {
    let columns = [];
    let k = 0;
    for (let j = 0; j < days.length; j++) {
      const dayIndex = i + j < days.length ? i + j : k++;
      const className = ((date > 7 ? Math.ceil(date % 7) === 0 ? 7 : Math.ceil(date % 7) : date) === (i + 1) && dayIndex === ((new Date(year, month, date).getDay() === 0 ? 7 : new Date(year, month, date).getDay()) - 1)) ? "day-column active " : "day-column ";
      columns.push(
        <div
          data-key={dayIndex}
          className={
            dayIndex === 6
              ? className + "text-red"
              : className
          }
        >
          {days[dayIndex]}
        </div>
      );
    }
    rows.push(<div className="row" key={i}>{columns}</div>);
  }

  return (
    <div className="day-grid">
      {rows}
    </div>
  );
};

export default DayGrid;
