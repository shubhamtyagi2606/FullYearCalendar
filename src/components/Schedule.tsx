import { useState } from "react";
// import { faTimesCircle, faSave } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";

interface ScheduleProps {
  selected_date: string;
  date: string;
  schedule: {
    _id: string;
    task: string;
  };
  getScheduleList: () => void;
  getScheduleListByMonth: () => void;
}

const Schedule:React.FC<ScheduleProps> = ({
  selected_date,
  date,
  schedule,
  getScheduleList,
  getScheduleListByMonth,
}) => {
  const [editSchedule, setEditSchedule] = useState(schedule.task);
  const [edit, setEdit] = useState(false);

  // const deleteSchedule = async (id) => {
    // await axios
    //   .delete(`http://localhost:4001/api/v1/schedule/` + id)
    //   .then(() => {
    //     getScheduleList();
    //     getScheduleListByMonth();
    //   });
  // };

  // const saveEditSchedule = async (id) => {
    // await axios
    //   .patch(`http://localhost:4001/api/v1/schedule/` + id, {
    //     task: editSchedule,
    //     date: selected_date + date,
    //   })
    //   .then(({ data }) => {
    //     setEdit(false);
    //     getScheduleList(data);
    //   });
  // };

  return (
    <li>
      {edit && (
        <div className="add-textarea">
          <textarea
            onChange={(e) => setEditSchedule(e.target.value)}
            defaultValue={editSchedule}
          ></textarea>
          {/* <FontAwesomeIcon
            icon={faSave}
            size="xl"
            pull="right"
            className="save-icon"
            onClick={() => saveEditSchedule(schedule._id)}
          /> */}
        </div>
      )}
      {!edit && (
        <>
          <span onClick={() => setEdit(true)}>- {schedule.task}</span>
          {/* <FontAwesomeIcon
            icon={faTimesCircle}
            size="lg"
            className="delete-icon"
            onClick={() => deleteSchedule(schedule._id)}
          /> */}
        </>
      )}
    </li>
  );
};

export default Schedule;
