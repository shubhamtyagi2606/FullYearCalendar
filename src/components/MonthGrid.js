const MonthGrid = ({ year, month, changeMonth }) => {
  let firstDay = [];
  let lastDay = [];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let colorArray = {
    28: "yellow",
    29: "yellow",
    30: "purple",
    31: "green",
  };
  months.forEach((monthValue, index) => {
    firstDay[index] = new Date(year, index, 0).getDay();
    lastDay[index] = new Date(year, index + 1, 0).getDate();
  });

  let rows = [];
  for (let i = 0; i < 3; i++) {
    let columns = [];
    for (let j = 0; j < 7; j++) {
      let monthIndex = null;
      for (let k = 0; k < firstDay.length; k++) {
        if (firstDay[k] === j) {
          monthIndex = k;
          break;
        }
      }

      let className ="month-column text-";

      columns.push(
        <div
          key={i + j}
          className={
            monthIndex === month
              ? className + colorArray[lastDay[monthIndex]] + " active"
              : className + colorArray[lastDay[monthIndex]]
          }
          {...(colorArray[lastDay[monthIndex]] !== undefined && { onClick: () => changeMonth(monthIndex) })}
        >
          {monthIndex === null ? "" : months[monthIndex]}
        </div>
      );
      if (monthIndex !== null) {
        firstDay[monthIndex] = "";
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
