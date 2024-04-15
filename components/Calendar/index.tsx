import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { Props } from './props';

const CalendarComponent: React.FC<Props> = (props) => {
  const { markedDates } = props;
  return (
    <CalendarList
      markingType={'period'}
      markedDates={markedDates}
    />
  );
}

export default CalendarComponent;