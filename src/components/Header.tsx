import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyColors} from '../styles/Color';

interface HeaderProps {
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({subTitle}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Every Cent</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: MyColors.foregrounddefault,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: MyColors.foregroundsecondary,
  },
  title: {
    color: MyColors.primarydefault,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: MyColors.primarydefault,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export {Header};
