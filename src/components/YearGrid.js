import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const YearGrid = ({ year, changeYear }) => {
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
