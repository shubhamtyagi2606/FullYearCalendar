import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Schedule from "./Schedule";

const DateBlock = ({ year, month, date, changeDate, dateValue, getScheduleListByMonth }) => {
  const [addSchedule, setAddSchedule] = useState(false);
  const [schedule, setSchedule] = useState("");
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(
    function () {
      if (date === dateValue) {
        getScheduleList();
      }
    },
    [date]
  );

  const current_day = new Date();
  const current_date =
    current_day.getFullYear() +
    "-" +
    (current_day.getMonth().toString().length > 1
      ? (current_day.getMonth() + 1)
      : "0" + (current_day.getMonth() + 1)) +
    "-" +
    (current_day.getDate().toString().length > 1
      ? current_day.getDate()
      : "0" + current_day.getDate());

  const selected_date =
    year +
    (month.toString().length > 1 ? "-" + (month + 1) : "-0" + (month + 1)) +
    (dateValue.toString().length > 1 ? "-" : "-0");

  const getScheduleList = async () => {
    // await axios
    //   .get(`http://localhost:4001/api/v1/schedule/` + selected_date + date)
    //   .then(({ data }) => {
    //     setScheduleList(data);
    //   });
  };

  const saveSchedule = async () => {
    // await axios
    //   .post(`http://localhost:4001/api/v1/schedule`, {
    //     task: schedule,
    //     date: selected_date + date,
    //   })
    //   .then(({ data }) => {
    //     setScheduleList(data);
    //     setAddSchedule(false);
    //     setSchedule("");
    //     getScheduleListByMonth()
    //   });
  };

  const popover = (
    <Popover>
      <Popover.Body>
        <div className="schedule-popup">
          {scheduleList.length > 0 && (
            <ul>
              {scheduleList.map((schedule, index) => {
                return (
                  <Schedule
                    key={index}
                    selected_date={selected_date}
                    date={date}
                    schedule={schedule}
                    getScheduleList={getScheduleList}
                    getScheduleListByMonth={getScheduleListByMonth}
                  />
                );
              })}
            </ul>
          )}
          {addSchedule && (
            <div className="add-textarea">
              <textarea
                onChange={(e) => setSchedule(e.target.value)}
              ></textarea>
              <FontAwesomeIcon
                icon={faSave}
                size="xl"
                pull="right"
                className="save-icon"
                onClick={() => saveSchedule()}
              />
            </div>
          )}
          {!addSchedule && (
            <Button
              className="add-schedule"
              onClick={() => setAddSchedule(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add</span>
            </Button>
          )}
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      overlay={popover}
      placement="auto"
      rootClose={true}
    >
      <span
        onClick={() => changeDate(dateValue)}
        className={
          selected_date + dateValue === current_date
            ? "position-relative open-popup current-date"
            : "position-relative open-popup"
        }
      >
        {dateValue <= new Date(year, month + 1, 0).getDate() ? dateValue : ""}
        <span className="dot"></span>
      </span>
    </OverlayTrigger>
  );
};

export default DateBlock;
