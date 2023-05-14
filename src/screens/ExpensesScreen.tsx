import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DataTable} from 'react-native-paper';

interface Transaction {
  id: number;
  name: string;
  amount: number;
  date: Date;
  category: string;
  isIncome: boolean;
}

const ExpensesScreen = () => {
  const [expenses, setExpenses] = useState<Transaction[]>([
    {
      id: 1,
      name: 'Rent',
      amount: 1200,
      date: new Date('2023-05-01'),
      category: 'Housing',
      isIncome: false,
    },
    {
      id: 2,
      name: 'Groceries',
      amount: 200,
      date: new Date('2023-05-02'),
      category: 'Food',
      isIncome: false,
    },
    {
      id: 3,
      name: 'Electricity Bill',
      amount: 80,
      date: new Date('2023-05-03'),
      category: 'Utilities',
      isIncome: false,
    },
  ]);
  const [incomes, setIncomes] = useState<Transaction[]>([
    {
      id: 4,
      name: 'Salary',
      amount: 3500,
      date: new Date('2023-05-01'),
      category: 'Work',
      isIncome: true,
    },
    {
      id: 5,
      name: 'Freelance Project',
      amount: 1200,
      date: new Date('2023-05-02'),
      category: 'Work',
      isIncome: true,
    },
  ]);
  const [totalExpense, setTotal] = useState<number>(
    expenses.reduce((acc, cur) => acc + cur.amount, 0),
  );
  const [totalIncome, setTotalIncome] = useState<number>(
    incomes.reduce((acc, cur) => acc + cur.amount, 0),
  );

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Total income</DataTable.Title>
          <DataTable.Title numeric>Total Expenses</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>{totalIncome}</DataTable.Cell>
          <DataTable.Cell numeric>{totalExpense}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <Text>Expenses:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ExpensesScreen;
