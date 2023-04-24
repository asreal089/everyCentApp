import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { MyColors } from '../styles/Color';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={MyColors.backgrounddefault} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingScreen;