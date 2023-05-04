import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, View, Dimensions} from 'react-native';
import {BudgetItem} from '../components/BudgetItem';
import {DataTable} from 'react-native-paper';
import {
  PieChart
} from "react-native-chart-kit";

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
  const chartData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <PieChart
          data={chartData}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 50]}
          absolute
        />
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
