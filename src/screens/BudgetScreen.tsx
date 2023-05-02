import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {BudgetItem} from '../components/BudgetItem';
import {DataTable} from 'react-native-paper';

const BudgetScreen = () => {
  const data = [
    {
      title: 'Housing',
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
  ];
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title>Limit</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>
        {data.map((item, index) => (
          <BudgetItem
            key={item.title}
            title={item.title}
            limitAmount={item.limitAmount}
          />
        ))}
      </DataTable>
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
