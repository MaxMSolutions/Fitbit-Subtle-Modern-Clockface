import { goals } from "user-activity";
import { today } from "user-activity";

export function get(stat, displayModifier) {

  const goal = goals[stat];
  const current = today.adjusted[stat];
  let displayCurrent = current;
  
  if (displayModifier)
    displayCurrent = displayModifier(current);
  
  if (goal !== undefined && current !== undefined) {
    return {
      percentage: (current/goal).toFixed(2),
      goal,
      current,
      displayCurrent,
    } 
  }

  return;
}