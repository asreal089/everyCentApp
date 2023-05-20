import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {ChartColors, MyColors} from '../styles/Color';
import ProgressChart from 'react-native-chart-kit/dist/ProgressChart';

const expenses = [
  {
    category: 'Food',
    expense: 50.0,
    budget: 100.0,
  },
  {
    category: 'Transportation',
    expense: 30.0,
    budget: 50.0,
  },
  {
    category: 'Entertainment',
    expense: 20.0,
    budget: 30.0,
  },
  {
    category: 'Utilities',
    expense: 80.0,
    budget: 100.0,
  },
];

const chartData: {labels: any, data:any, colors:any} = { labels: [], data: [], colors: [] };
expenses.forEach((item, index) => {
  chartData.labels.push(item.category);
  chartData.data.push(item.expense / item.budget);
});
const chartConfig = {
  backgroundColor: MyColors.backgroundlight,
  backgroundGradientFrom: ChartColors[0],
  backgroundGradientTo: ChartColors[ChartColors.length - 1],
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 1,
  },
  strokeWidth: 4,
  
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ProgressChart
        data={chartData}
        width={useWindowDimensions().width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <Text></Text>
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

export default HomeScreen;
