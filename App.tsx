import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from './src/theme';
import HomeApp from './src/screens/Home';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${theme.COLORS.GRAY_100}`,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;