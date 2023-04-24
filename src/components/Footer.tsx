import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MyColors } from '../styles/Color';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
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