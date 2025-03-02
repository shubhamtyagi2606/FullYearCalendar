interface MonthGridProps {
  year: number;
  month: number;
  changeMonth: (month: number) => void;
}

const MonthGrid: React.FC<MonthGridProps> = ({ year, month, changeMonth }) => {
  const firstDay: number[] = [];
  const lastDay: number[] = [];

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const colorArray: Record<number, string> = {
    28: "yellow",
    29: "yellow",
    30: "purple",
    31: "green"
  };

  months.forEach((_, index) => {
    firstDay[index] = new Date(year, index, 0).getDay();
    lastDay[index] = new Date(year, index + 1, 0).getDate();
  });

  const rows = [];

  for (let i = 0; i < 3; i++) {
    const columns = [];

    for (let j = 0; j < 7; j++) {
      let monthIndex: number = -Infinity;
      for (let k = 0; k < firstDay.length; k++) {
        if (firstDay[k] === j) {
          monthIndex = k;
          break;
        }
      }

      let className = "full-year-calendar-month-column full-year-calendar-text-" + colorArray[lastDay[monthIndex]] + (monthIndex === month ? " full-year-calendar-active" : "");

      columns.push(
        <div
          key={i + j}
          className={className}
          {...(colorArray.hasOwnProperty(lastDay[monthIndex]) && { onClick: () => changeMonth(monthIndex as number) })}
        >
          {monthIndex >= 0 && months[monthIndex]}
        </div>
      );

      if (monthIndex >= 0) {
        firstDay[monthIndex as number] = -Infinity;
      }
    }
    rows.push(<div className="full-year-calendar-row" key={i}>{columns}</div>);
  }

  return (
    <div className="full-year-calendar-month-grid">
      {rows}
    </div>
  );
};

export default MonthGrid;
