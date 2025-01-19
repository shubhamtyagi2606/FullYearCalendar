import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YearGrid = ({ year, changeYear }) => {
  return (
    <td className="year-grid">
      <table>
        <tbody>
          <tr>
            <td>
              <button className="arrow left">
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  onClick={() => changeYear(year === 1 ? year : year - 1)}
                />
              </button>
            </td>
            <td>
              <span>{year}</span>
            </td>
            <td>
              <button className="arrow right">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  onClick={() => changeYear(year + 1)}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default YearGrid;
