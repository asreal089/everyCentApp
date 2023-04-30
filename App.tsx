import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScree';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExpensesScreen from './src/screens/ExpensesScreen';
import BudgetScreen from './src/screens/BudgetScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyColors} from './src/styles/Color';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator sceneContainerStyle={styles.backgroundStyle}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({size}) => (
              <Icon name="home" color={MyColors.primarylight} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Expenses" component={ExpensesScreen} options={{
            tabBarLabel: 'Expenses',
            tabBarIcon: ({ size}) => (
              <Icon name="money" color={MyColors.primarylight} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Budget" component={BudgetScreen} options={{
            tabBarLabel: 'Budget',
            tabBarIcon: ({ size}) => (
              <Icon name="sliders" color={MyColors.primarylight} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: MyColors.backgrounddefault,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
