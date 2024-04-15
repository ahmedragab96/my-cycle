import { addDays, format } from 'date-fns';


export const addDay = (date: string, daysToAdd: number) => {
  // Input date
  const inputDate = new Date(date);

  // Add one day to the input date
  const newDate = addDays(inputDate, daysToAdd);

  // Format the new date as "YYYY-MM-DD"
  const formattedDate = format(newDate, 'yyyy-MM-dd');

  return formattedDate;
};