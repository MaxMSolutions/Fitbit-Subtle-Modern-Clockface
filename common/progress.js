import document from 'document';
import * as ui from "./ui";

let cache = {
  steps: {
    maxBars: 0,
    bars: undefined,
  },
  distance: {
    maxBars: 0,
    bars: undefined,
  },
  calories: {
    maxBars: 0,
    bars: undefined,
  },
  activeMinutes: {
    maxBars: 0,
    bars: undefined,
  },
  elevationGain: {
    maxBars: 0,
    bars: undefined,
  },
};

export function set(name, percent) {
  const progressBars = "";
  const barCount = (10 * percent).toFixed(0);
  barCount = barCount >= 10 ? 10 : barCount;
  
  cache[name].maxBars = barCount;
  cache[name].bars = 0;
  
  animateBarsIn(name);
}

function animateBarsIn(statName, barControl) {
    setTimeout(function() {

      const currentBars = cache[statName].bars;
      const maxBars = cache[statName].maxBars;
      
      let displayBarText = "";
      if (currentBars < maxBars) {
        const setToBars = currentBars + 1;
        let displayBarsCount = 1;

        while (displayBarsCount <= setToBars && displayBarsCount <= maxBars) {
          displayBarText += "/";
          displayBarsCount++;
        }
        
        cache[statName].bars = currentBars + 1;
        ui.controls[`${statName}Progress`].text = displayBarText;

        animateBarsIn(statName);
      }

    }, 150);
}