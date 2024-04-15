import { CycleData } from "@/firebase/cycles";
import { MarkedDates } from "react-native-calendars/src/types";
import colors from "../constants/Colors";
import { addDay } from "./dateUtils";

const FERTILE_WINDOW = 8;

export const calculateCycles = (cycles: CycleData[]): MarkedDates => {
  const calendarDays: MarkedDates = {};
  cycles.forEach((cycle) => {
    const { end_date, period_days, start_date } = cycle;
    // calculate period days
    for (let i = 0; i < period_days; i++) {
      const dayProperties =
        i === 0
          ? { startingDay: true }
          : i === period_days - 1
          ? { endingDay: true }
          : {};
      calendarDays[addDay(start_date, i)] = {
        ...dayProperties,
        color: colors.light.periodDay,
        textColor: "white",
      };
    }
    const fertileWindowStartingDate = addDay(start_date, 10);
    // calculate fertile days.
    for (let i = 0; i < FERTILE_WINDOW; i++) {
      const dayProperties =
        i === 0
          ? { startingDay: true }
          : i === FERTILE_WINDOW - 1
          ? { endingDay: true }
          : {};
      const ovulationDayProperties =
        i === 5
          ? {
              customContainerStyle: {
                backgroundColor: "green",
              },
            }
          : {};
      calendarDays[addDay(fertileWindowStartingDate, i)] = {
        ...dayProperties,
        ...ovulationDayProperties,
        color: colors.light.fertileWindow,
        textColor: "white",
      };
    }
  });
  return calendarDays;
};
