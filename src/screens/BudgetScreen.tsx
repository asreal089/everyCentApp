import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { BudgetItem } from '../components/BudgetItem';

const BudgetScreen = () => {
  return (
    <View style={styles.container}>

      <FlatList
        data={[
          {title: 'Devin', limitAmount: 100},
          {title: 'Devin', limitAmount: 100},
          {title: 'Devin', limitAmount: 100},
          {title: 'Devin', limitAmount: 100},
          {title: 'Dan', limitAmount: 100},
          {title: 'Dominic', limitAmount: 100},
          {title: 'Jackson',limitAmount: 100},
          {title: 'James', limitAmount: 100},
          {title: 'Joel', limitAmount: 100},
          {title: 'John', limitAmount: 100},
          {title: 'Jillian', limitAmount: 100},
          {title: 'Jimmy', limitAmount: 100},
          {title: 'Julie', limitAmount: 100},
        ]}
        renderItem={({item}) => <BudgetItem title={item.title} limitAmount={item.limitAmount}/>}
      />
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
