import React, { useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';
import { Props } from './props';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import TemperatureForm from '../TemperatureForm';
import { styles } from './styles';

const CalendarComponent: React.FC<Props> = (props) => {
  const { markedDates } = props;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [ displayedDate, setDisplayedDate ] = useState<string | undefined>();

  const onSubmitForm = (temperatureValue: number) => {
    console.log(displayedDate, temperatureValue);
    setDisplayedDate(undefined);
    bottomSheetRef.current?.forceClose();
  };

  return (
    <>
    <CalendarList
      markingType={'period'}
      markedDates={markedDates}
      onDayPress={(date: DateData) => {
        setDisplayedDate(date.dateString);
        bottomSheetRef.current?.snapToIndex(0);
      }}
      calendarStyle={{ backgroundColor: '#45453A'}}
      pastScrollRange={12}
      futureScrollRange={12}
    />
    <BottomSheet
      snapPoints={[250]}
      index={-1}
      keyboardBehavior='interactive'
      enablePanDownToClose
      style={styles.bottomSheetContainer}
      backgroundStyle={styles.bottomSheetBackground}
      ref={bottomSheetRef}
      onClose={Keyboard.dismiss}
    >
      <TemperatureForm onSubmitForm={onSubmitForm} initialValue={''}/>
    </BottomSheet>
    </>
  );
}

export default CalendarComponent;