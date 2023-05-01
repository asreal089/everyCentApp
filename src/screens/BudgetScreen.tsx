import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {BudgetItem} from '../components/BudgetItem';

const BudgetScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            title: 'Rent or Mortgage',
            limitAmount: 1200,
          },
          {
            title: 'Utilities',
            limitAmount: 150,
          },
          {
            title: 'Groceries',
            limitAmount: 300,
          },
          {
            title: 'Transportation',
            limitAmount: 100,
          },
          {
            title: 'Insurance',
            limitAmount: 200,
          },
          {
            title: 'Healthcare',
            limitAmount: 150,
          },
          {
            title: 'Savings',
            limitAmount: 250,
          },
          {
            title: 'Debt Repayment',
            limitAmount: 200,
          },
          {
            title: 'Entertainment',
            limitAmount: 100,
          },
          {
            title: 'Clothing',
            limitAmount: 50,
          },
        ]}
        renderItem={({item}) => (
          <BudgetItem title={item.title} limitAmount={item.limitAmount} />
        )}
      />
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
