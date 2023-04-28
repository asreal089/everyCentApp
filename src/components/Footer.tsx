import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MyColors } from '../styles/Color';
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
      <Text style={styles.text}>© 2023 - Every Cent</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  footer: {
    backgroundColor: MyColors.foregrounddefault,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: MyColors.primarydefault,
    fontSize: 12
  }
});

export { Footer };