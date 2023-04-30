import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {MyColors} from '../styles/Color';
import {Header} from '../components/Header';

const BudgetScreen = () => {
  return (
    <View style={styles.container}>
      <Header subTitle={'Budget'} />

      <Text>Hello Budget</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BudgetScreen;
