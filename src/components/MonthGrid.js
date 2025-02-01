const MonthGrid = ({ year, month, changeMonth }) => {
  let firstDay = [];
  let lastDay = [];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
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

      let className =
        "month-column " +
        (monthIndex === month && monthIndex !== new Date().getMonth() ? "selected-month" : "") +
        " text-";
      let colorArray = {
        28: "yellow",
        29: "yellow",
        30: "purple",
        31: "green",
      };

      columns.push(
        <div
          key={i + j}
          className={
            monthIndex === new Date().getMonth() &&
              year === new Date().getFullYear()
              ? className + colorArray[lastDay[monthIndex]] + " active"
              : className + colorArray[lastDay[monthIndex]]
          }
          onClick={() => changeMonth(monthIndex)}
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
