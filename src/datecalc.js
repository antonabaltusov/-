import { DateTime } from "./luxon.js";

export const diffDates = (firstDate, secondDate) => {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
};