import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScree';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExpensesScreen from './src/screens/ExpensesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyColors} from './src/styles/Color';
import BudgetNaviagtionScreen from './src/screens/BudgetNavigationScreen';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: MyColors.backgrounddefault,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: MyColors.backgrounddefault,
          },
          tabBarStyle: {
            backgroundColor: MyColors.backgrounddefault,
          },
          headerTitleStyle: {
            color: MyColors.primarydefault,
          }
        })}
        sceneContainerStyle={styles.backgroundStyle}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: MyColors.primarylight,
            tabBarInactiveTintColor: MyColors.primarydefault,
            tabBarIcon: ({size}) => (
              <Icon name="home" color={MyColors.primarydefault} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{
            tabBarLabel: 'Expenses',
            tabBarActiveTintColor: MyColors.primarylight,
            tabBarInactiveTintColor: MyColors.primarydefault,
            tabBarIcon: ({size}) => (
              <Icon name="money" color={MyColors.primarydefault} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Budget"
          component={BudgetNaviagtionScreen}
          options={{
            tabBarLabel: 'Budget',
            tabBarActiveTintColor: MyColors.primarylight,
            tabBarInactiveTintColor: MyColors.primarydefault,
            tabBarIcon: ({size}) => (
              <Icon name="sliders" color={MyColors.primarydefault} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: MyColors.backgrounddefault,
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: MyColors.backgroundlight,
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
