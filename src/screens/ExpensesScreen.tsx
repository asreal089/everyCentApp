import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';
import { MyColors } from '../styles/Color';
import { Header } from '../components/Header';
import { BudgetItem } from '../components/BudgetItem';

const ExpensesScreen = () => {
  return (
    <View style={styles.container}>

      <Text>Expenses:</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item:{
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

export default ExpensesScreen;