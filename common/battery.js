import { battery } from "power";
import * as ui from "../common/ui";

export function set() {
  const batteryLevel = Math.floor(battery.chargeLevel);
  ui.controls.battery.text = batteryLevel;
  
  // Display is in reverse. Fills in from top to bottom.
  const batteryHeight = 10 - Math.floor(batteryLevel/10);
  ui.controls.batteryMeter.height = parseInt(batteryHeight);
}