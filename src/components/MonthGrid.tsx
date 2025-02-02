interface MonthGridProps {
  year: number;
  month: number;
  changeMonth: (month: number) => void;
}

type colorKeyType = 28 | 29 | 30 | 31;

const MonthGrid: React.FC<MonthGridProps> = ({ year, month, changeMonth }) => {
  const firstDay: number[] = [];
  const lastDay: number[] = [];

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let colorArray = {
    28: "yellow",
    29: "yellow",
    30: "purple",
    31: "green"
  };

  months.forEach((_, index) => {
    firstDay[index] = new Date(year, index, 0).getDay();
    lastDay[index] = new Date(year, index + 1, 0).getDate();
  });

  const rows: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    const columns: JSX.Element[] = [];

    for (let j = 0; j < 7; j++) {
      let monthIndex: number = -Infinity;
      for (let k = 0; k < firstDay.length; k++) {
        if (firstDay[k] === j) {
          monthIndex = k;
          break;
        }
      }

      let className = "month-column text-" + colorArray[lastDay[monthIndex] as colorKeyType] + (monthIndex === month ? " active" : "");

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
    rows.push(<div className="row" key={i}>{columns}</div>);
  }

  return (
    <div className="month-grid">
      {rows}
    </div>
  );
};

export default MonthGrid;
