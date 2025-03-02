interface DayGridProps {
  year: number;
  month: number;
  date: number;
}

const DayGrid: React.FC<DayGridProps> = ({ year, month, date }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let rows = [];
  for (let i = 0; i < days.length; i++) {
    let columns = [];
    let k = 0;
    for (let j = 0; j < days.length; j++) {
      const dayIndex = i + j < days.length ? i + j : k++;
      const className = ((date > 7 ? Math.ceil(date % 7) === 0 ? 7 : Math.ceil(date % 7) : date) === (i + 1) && dayIndex === ((new Date(year, month, date).getDay() === 0 ? 7 : new Date(year, month, date).getDay()) - 1)) ? "full-year-calendar-day-column full-year-calendar-active " : "full-year-calendar-day-column ";
      columns.push(
        <div
          key={dayIndex}
          className={
            dayIndex === 6
              ? className + "full-year-calendar-text-red"
              : className
          }
        >
          {days[dayIndex]}
        </div>
      );
    }
    rows.push(<div className="full-year-calendar-row" key={i}>{columns}</div>);
  }

  return (
    <div className="full-year-calendar-day-grid">
      {rows}
    </div>
  );
};

export default DayGrid;
