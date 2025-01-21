const DayGrid = ({ year, month, date }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];

  let rows = [];
  for (let i = 0; i < days.length; i++) {
    let columns = [];
    let k = 0;
    for (let j = 0; j < days.length; j++) {
      const dayIndex = i + j < days.length ? i + j : k++;
      const className = (dayIndex === new Date(year, month, date).getDay()) ? "day-columns columns current-day " : "day-columns columns ";
      columns.push(
        <td
          key={dayIndex}
          className={
            dayIndex === 6
              ? className + "text-red"
              : className
          }
        >
          {days[dayIndex]}
        </td>
      );
    }
    rows.push(<tr key={i}>{columns}</tr>);
  }

  return (
    <td className="day-grid">
      <table>
        <tbody>{rows}</tbody>
      </table>
    </td>
  );
};

export default DayGrid;
