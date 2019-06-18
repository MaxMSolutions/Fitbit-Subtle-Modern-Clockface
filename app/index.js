import * as clock from "../common/clock";
import * as heartRate from "../common/heartRate";
import * as stats from "../common/stats";
import * as battery from "../common/battery";

clock.start();
heartRate.start();
stats.start();
battery.set();