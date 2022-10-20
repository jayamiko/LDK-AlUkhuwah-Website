import * as React from "react";
import {
  ScheduleComponent,
  WorkWeek,
  Week,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
// import { defaultData } from "./datasource";
import { extend } from "@syncfusion/ej2-base";

class FullCalendarComp extends React.Component {
  constructor() {
    super(...arguments);
    this.data = extend(
      [
        {
          Id: 2,
          Subject: "Meeting",
          StartTime: new Date(2018, 1, 15, 10, 0),
          EndTime: new Date(2018, 1, 15, 12, 30),
          IsAllDay: false,
          Status: "Completed",
          Priority: "High",
        },
      ],
      null,
      true
    );
  }
  render() {
    return (
      <ScheduleComponent
        width="100%"
        height="550px"
        selectedDate={new Date(2018, 1, 15)}
        currentView="Month"
        eventSettings={{ dataSource: this.data }}
      >
        <ViewsDirective>
          <ViewDirective option="WorkWeek" startHour="10:00" endHour="18:00" />
          <ViewDirective option="Week" startHour="07:00" endHour="15:00" />
          <ViewDirective option="Month" showWeekend={false} />
        </ViewsDirective>
        <Inject services={[WorkWeek, Week, Month]} />
      </ScheduleComponent>
    );
  }
}

export default FullCalendarComp;
