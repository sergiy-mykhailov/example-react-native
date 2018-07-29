import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Hello React Native!</Text>
      </View>
    );
  }
}

export default App;
