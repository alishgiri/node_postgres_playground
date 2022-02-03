const moment = require("moment");
require("moment-timezone"); // this is required for using moment().tz()

const timezone = "Europe/Amsterdam";

const currentAmesterdamDT = moment().tz(timezone);

const todayHasDST = currentAmesterdamDT.isDST();

console.log("todayHasDST --->", todayHasDST);

// Daylight time started from March 27 and ended in October 30 in Europe/Amsterdam
const savedLocalAmesterdamDT = moment("2022-03-25T11:55:00");
const savedDateTimeUtc = moment(savedLocalAmesterdamDT).tz(timezone).utc();
const shouldMatchSavedLocalAmesterdamDT = moment(savedDateTimeUtc)
  .tz(timezone)
  .local();

const savedDateTimeHasDST = shouldMatchSavedLocalAmesterdamDT.isDST();

console.log("savedLocalAmesterdamDT --->", savedLocalAmesterdamDT);
console.log("savedDateTimeUtc --->", savedDateTimeUtc);
console.log(
  "shouldMatchSavedLocalAmesterdamDT --->",
  shouldMatchSavedLocalAmesterdamDT
);

if (todayHasDST && savedDateTimeHasDST) {
  // Do nothing and just display time.
} else if (todayHasDST && !savedDateTimeHasDST) {
  // Add 1 hour to the saved date-time and display the time.
  savedLocalAmesterdamDT.add(1, "hour");
} else if (!todayHasDST && savedDateTimeHasDST) {
  // Substract 1 hour to the saved date-time and display the time.
  savedLocalAmesterdamDT.subtract(1, "hour");
}
