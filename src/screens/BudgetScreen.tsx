import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, View} from 'react-native';
import {BudgetItem} from '../components/BudgetItem';
import {DataTable} from 'react-native-paper';

const BudgetScreen = () => {
  const dataIncome = [
    {title: 'Salary', value: 50000},
    {title: 'Investments', value: 2000},
    {title: 'Rentals', value: 1000},
  ];

  const dataBudget = [
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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Income:</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Type</DataTable.Title>
              <DataTable.Title>Expected</DataTable.Title>
              <DataTable.Title numeric>Action</DataTable.Title>
            </DataTable.Header>
            {dataIncome.map((item, index) => (
              <BudgetItem
                key={item.title}
                title={item.title}
                limitAmount={item.value}
              />
            ))}
          </DataTable>
          <Text>Budget:</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Type</DataTable.Title>
              <DataTable.Title>Limit</DataTable.Title>
              <DataTable.Title numeric>Action</DataTable.Title>
            </DataTable.Header>
            {dataBudget.map((item, index) => (
              <BudgetItem
                key={item.title}
                title={item.title}
                limitAmount={item.limitAmount}
              />
            ))}
          </DataTable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BudgetScreen;
