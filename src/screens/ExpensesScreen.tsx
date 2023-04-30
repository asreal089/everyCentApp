import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { MyColors } from '../styles/Color';
import { Header } from '../components/Header';

const ExpensesScreen = () => {
  return (
    <View style={styles.container}>
      <Header subTitle={'Expenses'} />

      <Text>Hello Expenses</Text>
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

export default ExpensesScreen;