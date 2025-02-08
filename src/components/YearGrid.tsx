interface YearGridProps {
  year: number;
  changeYear: (year: number) => void;
}

const YearGrid: React.FC<YearGridProps> = ({ year, changeYear }) => {
  return (
    <div className="year-grid">
      <button className="arrow left-arrow" onClick={() => changeYear(Math.max(1, year - 1))}>
        ◀
      </button>
      <span>{year}</span>
      <button className="arrow right-arrow" onClick={() => changeYear(year + 1)}>
        ▶
      </button>
    </div>
  );
};

export default YearGrid;
