import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';
import { styles } from './styles';

interface Props {
  onSubmitForm: (value: number) => void;
  initialValue: string;
}

const TemperatureForm: React.FC<Props> = ({ onSubmitForm, initialValue }) => {
  const [temperatureValue, setTemperatureValue] = useState(initialValue || '');

  return (
    <View style={styles.container} >
      <Text style={styles.title}>How are you feeling today ?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => setTemperatureValue(text)}
        value={temperatureValue.toString()}
        keyboardType={'numeric'}
        placeholder={'0'}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSubmitForm(Number(temperatureValue))}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TemperatureForm;