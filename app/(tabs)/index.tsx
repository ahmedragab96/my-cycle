import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CalendarComponent from "@/components/Calendar";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "@/firebase/config";
import { CycleData } from "@/firebase/cycles";
import { calculateCycles } from "@/utils/calculateCycles";

export default function TabOneScreen() {
  const [ markedDates, setMarkedDates] = useState({});
  useEffect(() => {
    const cyclesRef = collection(FIRESTORE_DB, "cycles");
    const subscriber = onSnapshot(cyclesRef, {
      next: (snapshot) => {
        const cycles: CycleData[] = [];

        snapshot.docs.forEach((doc) => {
          cycles.push(doc.data() as CycleData);
        });

        const calculatedDates = calculateCycles(cycles);

        setMarkedDates(calculatedDates);
      },
    });
    return () => subscriber();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <CalendarComponent markedDates={markedDates}/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
