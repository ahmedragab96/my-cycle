import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'grey',
    paddingVertical: 16
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 50,
    paddingHorizontal: 16,
    marginVertical: 16
  },
  button: {
    backgroundColor: '#2f95dc',
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto'
  },
  buttonText: {
    fontSize: 18
  }
});
