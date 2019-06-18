import * as statValue from "./statValue";
import * as progress from "./progress";
import * as ui from "./ui";

const oneMinute = 1000 * 60;

function setDisplayStat(stat, displayModifier) {
  const value = statValue.get(stat, displayModifier);
  ui.controls[`${stat}Value`].text = value.displayCurrent;
  progress.set(stat, value.percentage);
}

export function start() {
  setDisplayStats();
  
  setInterval(() => {
    setDisplayStats();
  }, oneMinute);
}

function setDisplayStats() {
  setDisplayStat('steps');
  setDisplayStat('distance', calculateMiles);
  setDisplayStat('calories');
  setDisplayStat('activeMinutes');
  setDisplayStat('elevationGain');
}

function calculateMiles(distance) {
  return `${(distance * 0.000621371).toFixed(2)}mi`;
}
