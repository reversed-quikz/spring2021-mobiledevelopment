import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from './components/Name';
import FavFood from './components/FavFood';

export default function App() {
  return (
    <View style={styles.container}>
     <Name/>
     <FavFood/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
