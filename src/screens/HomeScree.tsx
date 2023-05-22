import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {ChartColors, MyColors} from '../styles/Color';
import ProgressChart from 'react-native-chart-kit/dist/ProgressChart';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {BarChart} from 'react-native-chart-kit';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

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

const chartData: {labels: any; data: any; colors: any} = {
  labels: [],
  data: [],
  colors: [],
};

const barChartData : ChartData = {
  labels: [],
  datasets: []
};

expenses.forEach((item, index) => {
  chartData.labels.push(item.category);
  barChartData.labels.push(item.category);
  barChartData.datasets.push({data: [item.expense, item.budget]});
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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Current progress:</Text>
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
          <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
            data={barChartData}
            width={useWindowDimensions().width}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            yAxisSuffix="$"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
