import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface YearGridProps {
  year: number;
  changeYear: (year: number) => void;
}

const YearGrid: React.FC<YearGridProps> = ({ year, changeYear }) => {
  return (
    <div className="year-grid">
      <button className="arrow">
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() => changeYear(year === 1 ? year : year - 1)}
        />
      </button>
      <span>{year}</span>
      <button className="arrow">
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() => changeYear(year + 1)}
        />
      </button>
    </div>
  );
};

export default YearGrid;
