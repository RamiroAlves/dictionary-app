import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from './src/theme';
import HomeApp from './src/screens/Home';
import { ToastProvider } from 'react-native-toast-notifications';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomeApp />
      </View>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${theme.COLORS.WHITE}`,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;