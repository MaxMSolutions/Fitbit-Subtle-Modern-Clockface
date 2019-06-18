import { preferences } from "user-settings";
import * as util from "./utils";

export function get(today) {
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  }
  hours = util.zeroPad(hours);
  let minutes = util.zeroPad(today.getMinutes());

  let month = util.zeroPad(today.getMonth());
  let day = util.zeroPad(today.getDate());
  let year = today.getFullYear();
  
  return {
    hours,
    minutes,
    month,
    day,
    year,
  }
}