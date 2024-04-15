import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { Props } from './props';

const CalendarComponent: React.FC<Props> = (props) => {
  return (
    <CalendarList
      markingType={'period'}
      markedDates={{
        '2024-05-15': {marked: true, dotColor: '#50cebb'},
        '2024-05-16': {marked: true, dotColor: '#50cebb'},
        '2024-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
        '2024-05-22': {color: '#70d7c7', textColor: 'white'},
        '2024-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
        '2024-05-24': {color: '#70d7c7', textColor: 'white'},
        '2024-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
      }}
    />
  );
}

export default CalendarComponent;