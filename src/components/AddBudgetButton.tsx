import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {MyColors} from '../styles/Color';
import {View} from 'react-native';

function AddBudgetButton(props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>Add Budget Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: MyColors.backgrounddefault,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: MyColors.primarydefault,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddBudgetButton;
