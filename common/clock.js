import clock from "clock";
import document from "document";
import * as now from "../common/now";
import * as ui from "../common/ui";
import * as utils from "../common/utils";

export function start() {
  clock.granularity = "seconds";

  clock.ontick = (evt) => {
    let currentDate = now.get(evt.date);
    let dateValue = `${currentDate.month}.${currentDate.day}.${currentDate.year}`;
    
    ui.controls.hours.text = currentDate.hours;
    ui.controls.minutes.text = currentDate.minutes;
    ui.controls.date.text = dateValue;
  };
}