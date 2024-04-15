import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CalendarComponent from '@/components/Calendar';

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <CalendarComponent/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
