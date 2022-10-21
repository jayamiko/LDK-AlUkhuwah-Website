import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { schedule } from "../../data/schedule/schedule";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const eventComponent = ({ schedule }) =>
  function event(props) {
    return (
      <div className="rbc-row-segment">
        <div
          className="rbc-event h-[24px] sm:h-[26px]"
          style={{
            background:
              props.event.status == "learn"
                ? "#00bcd4"
                : props.event.status === "task"
                ? "green"
                : props.event.status === "presentation"
                ? "orange"
                : "red",
          }}
        >
          <div className="rbc-event-content" title={props.title}>
            <h5 className="text-xs md:text-sm lg:text-base">{props.title}</h5>
          </div>
        </div>
      </div>
    );
  };

eventComponent.displayName = "Event Component";

function FullCalendarComp() {
  return (
    <div className="container mx-auto">
      <h1 className="font-mountains text-cyan-500 text-center lg:text-6xl">
        Schedule
      </h1>
      <div className="flex justify-center space-x-5 my-4">
        <div className="flex items-center space-x-2">
          <div className="bg-cyan-500 w-3 h-3"></div>
          <label>Materi</label>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-600 w-3 h-3"></div>
          <label>Tugas</label>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-orange-400 w-3 h-3"></div>
          <label>Presentasi</label>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-red-500 w-3 h-3"></div>
          <label>Materi Tambahan</label>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={schedule}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        components={{
          event: eventComponent({ schedule }),
        }}
      />
    </div>
  );
}

export default FullCalendarComp;
