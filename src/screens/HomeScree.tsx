import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {MyColors} from '../styles/Color';
import {Header} from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header subTitle={'Home'} />
      <Text>Hello Home</Text>
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

export default HomeScreen;
