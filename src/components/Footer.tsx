import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MyColors } from '../styles/Color';
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerIconsContainer}>

        <TouchableOpacity onPress={() => console.log('Home pressed')}>
          <Icon name="home" size={24} color={MyColors.primarydefault} />
          <Text style={styles.footerIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Dashboard pressed')}>
          <Icon name="bar-chart" size={24} color={MyColors.primarydefault} />
          <Text style={styles.footerIconText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Expenses pressed')}>
          <Icon name="money" size={24} color={MyColors.primarydefault} />
          <Text style={styles.footerIconText}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Budget pressed')}>
          <Icon name="sliders" size={24} color={MyColors.primarydefault} />
          <Text style={styles.footerIconText}>Budget</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>© 2023 - Every Cent</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  footer: {
    backgroundColor: MyColors.foregrounddefault,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: 1,
    borderTopColor: MyColors.foregroundsecondary,
  },
  footerIconText: {
    fontSize: 12,
    marginTop: 4,
    justifyContent: 'center',
    color: MyColors.primarydefault,
  },
  footerIconsContainer: {
    flexDirection: 'row',
    backgroundColor: MyColors.foregrounddefault,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    height: 60,
    paddingHorizontal: 10,
    width: '100%',
  },
  text: {
    color: MyColors.primarydefault,
    fontSize: 12
  }
});

export { Footer };