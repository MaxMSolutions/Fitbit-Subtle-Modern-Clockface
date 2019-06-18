import { HeartRateSensor } from "heart-rate";
import * as ui from "../common/ui";
import document from 'document';

export function start() {
  
  let beat = true;
  
  ui.controls.heartRate.text = "--";

  function updateDisplay() {
    ui.controls.heartRate.text = hrm.heartRate;
  }

  var hrm = new HeartRateSensor();
  hrm.onreading = function() {
    const heartRateDuration = 60 / hrm.heartRate;
    ui.controls.heartRate.text = hrm.heartRate;
    ui.controls.hrAnimation.dur = heartRateDuration;
  }
  hrm.start();

  setInterval(updateDisplay, 1000);
}