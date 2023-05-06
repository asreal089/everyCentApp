import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import AddEditBudgetScreen from './AddEditBudgetScreen';
import BudgeViewScreen from './BudgeViewScreen';

const Stack = createStackNavigator();

const BudgetNaviagtionScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="BudgeViewScreen" component={BudgeViewScreen} />
    <Stack.Screen name="AddEditBudgetScreen" component={AddEditBudgetScreen} />
  </Stack.Navigator>
);

export default BudgetNaviagtionScreen;