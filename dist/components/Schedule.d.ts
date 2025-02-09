/// <reference types="react" />
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
declare const Schedule: React.FC<ScheduleProps>;
export default Schedule;
//# sourceMappingURL=Schedule.d.ts.map