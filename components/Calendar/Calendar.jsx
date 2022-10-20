import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
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

const eventComponent =
  ({ schedule }) =>
  (props) => {
    console.log(schedule);
    return (
      <div className="rbc-row-segment">
        <h2 className="hidden">{schedule[0].title}</h2>
        <div
          className="rbc-event"
          style={{
            background:
              props.event.status == "learn"
                ? "#00bcd4"
                : props.event.status === "task"
                ? "green"
                : "orange",
          }}
        >
          <div className="rbc-event-content" title={props.title}>
            <h5 className="text-xs sm:text-sm md:text-base">{props.title}</h5>
          </div>
        </div>
      </div>
    );
  };

eventComponent.displayName = "Event Component";

function FullCalendarComp() {
  return (
    <div>
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
          <label>Task</label>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-orange-400 w-3 h-3"></div>
          <label>Presentasi</label>
        </div>
      </div>
      {/* <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div> */}
      <Calendar
        localizer={localizer}
        events={schedule}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        components={{
          event: eventComponent({ schedule }),
        }}
      />
    </div>
  );
}

export default FullCalendarComp;
