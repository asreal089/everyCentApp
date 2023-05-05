import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import {BudgetItem} from '../components/BudgetItem';
import {DataTable} from 'react-native-paper';
import {PieChart} from 'react-native-chart-kit';
import {ChartColors, MyColors} from '../styles/Color';
import formatMoney from '../utils/NumberUtils';

const BudgetScreen = () => {
  const dataIncome = [
    {title: 'Salary', value: 5000},
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
  const chartData: any[] = [];
  dataBudget.forEach((item, index) => {
    chartData.push({
      name: item.title,
      population: item.limitAmount,
      color: ChartColors[index],
      legendFontColor: MyColors.primarydark,
      legendFontSize: 15,
    });
  });
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const totalIncome = dataIncome.reduce((accumulator, object) => {
    return accumulator + object.value;
  }, 0);
  const displayTotalIncome = formatMoney(totalIncome);

  const totalBudget = dataBudget.reduce((accumulator, object) => {
    return accumulator + object.limitAmount;
  }, 0);
  const displayTotalBudget= formatMoney(totalBudget);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.chartContainer}>
            <PieChart
              data={chartData}
              width={Dimensions.get('window').width}
              height={220}
              chartConfig={chartConfig}
              accessor={'population'}
              backgroundColor={'transparent'}
              paddingLeft={'10'}
              center={[0, 0]}
              hasLegend={true}
            />
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Total income</DataTable.Title>
              <DataTable.Title numeric>Total budget</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>{displayTotalIncome}</DataTable.Cell>
              <DataTable.Cell numeric>{displayTotalBudget}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Income:</Text>
          </View>
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
          <View style={styles.titleContainer}>

            <Text style={styles.title}>Budget:</Text>
          </View>
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
  chartContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    jus: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BudgetScreen;
