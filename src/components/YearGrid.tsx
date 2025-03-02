interface YearGridProps {
  year: number;
  changeYear: (year: number) => void;
}

const YearGrid: React.FC<YearGridProps> = ({ year, changeYear }) => {
  return (
    <div className="full-year-calendar-year-grid">
      <button className="full-year-calendar-arrow full-year-calendar-left-arrow" onClick={() => changeYear(Math.max(1, year - 1))}>
        ◀
      </button>
      <span>{year}</span>
      <button className="full-year-calendar-arrow full-year-calendar-right-arrow" onClick={() => changeYear(year + 1)}>
        ▶
      </button>
    </div>
  );
};

export default YearGrid;
