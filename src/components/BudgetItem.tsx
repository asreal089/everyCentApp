import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyColors} from '../styles/Color';
import {
    formatCurrency,
} from "react-native-format-currency";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface BudgetItemProps {
  title: string;
  limitAmount: number;
}

const BudgetItem: React.FC<BudgetItemProps> = ({title, limitAmount}) => {
    const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
      formatCurrency({ amount: Number(limitAmount), code: "USD" });

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{title} - 
        {symbol}{valueFormattedWithoutSymbol}  
        <Icon name="square-edit-outline" color={MyColors.backgrounddefault} size={25}  />
        <Icon name="delete" color={MyColors.backgrounddefault} size={25}  />
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: MyColors.backgroundlight,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: MyColors.foregroundsecondary,
    },
    title: {
      color: MyColors.backgrounddefault,
      fontSize: 25,
      fontWeight: 'bold',
    },
    limit: {
      color: MyColors.primarydefault,
      fontSize: 25,
      fontWeight: 'bold',
    },
  });
  
  export {BudgetItem};
  