import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyColors} from '../styles/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import formatMoney from '../utils/NumberUtils';
import {DataTable} from 'react-native-paper';

interface BudgetItemProps {
  title: string;
  limitAmount: number;
}

const BudgetItem: React.FC<BudgetItemProps> = ({title, limitAmount}) => {
  const value = formatMoney(limitAmount);

  return (
    <DataTable.Row>
      <DataTable.Cell>{title}</DataTable.Cell>
      <DataTable.Cell>{value}</DataTable.Cell>
      <DataTable.Cell>
        <Icon
          name="square-edit-outline"
          color={MyColors.backgrounddefault}
          size={25}
        />
        <Icon name="delete" color={MyColors.backgrounddefault} size={25} />
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: MyColors.backgroundlight,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    display: 'flex',
    borderBottomColor: MyColors.foregroundsecondary,
  },
  title: {
    color: MyColors.backgrounddefault,
    fontSize: 25,
    fontWeight: 'bold',
    float: 'left',
    width: '50%',
  },
  limit: {
    color: MyColors.primarydefault,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export {BudgetItem};
