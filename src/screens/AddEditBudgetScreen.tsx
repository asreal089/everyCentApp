import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {MyColors} from '../styles/Color';
import MainButton from '../components/MainButton';

const AddEditBudgetScreen = () => {
  const [title, setTitle] = useState('');
  const [limit, setLimit] = useState(0);

  const handleTitleChange = (value: React.SetStateAction<string>) => {
    setTitle(value);
  };

  const handleLimitChange = (value: React.SetStateAction<string>) => {
    let newValue: number = +value;
    setLimit(newValue);
  };

  const handleSubmit = () => {
    console.log('Title: ' + title);
  };

  const budgetTipe = [
    'Housing',
    'Utilities',
    'Groceries',
    'Transportation',
    'Insurance',
    'Healthcare',
    'Savings',
    'Debt Repayment',
    'Entertainment',
    'Clothing',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputTextContainer}>
        <Text style={styles.inputLabel}>Value</Text>
        <TextInput
          style={styles.inputNumber}
          keyboardType="numeric"
          onChangeText={text => {
            return handleLimitChange(text.replace(/[^0-9]/g, ''));
          }}
          value={limit.toString()}
          maxLength={10}
        />
      </View>
      <Picker
        selectedValue={title}
        onValueChange={handleTitleChange}
        style={styles.inputPicker}>
        {budgetTipe.map((item, index) => {
          return <Picker.Item label={item} value={item} key={item} />;
        })}
      </Picker>
      <View style={styles.buttonContainer}>
        <MainButton title="save" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    justifyItems: 'center',
    height: 70,
    paddingEnd: 15,
    paddingStart: 15,
  },
  inputLabel: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom : 10,
  },
  inputPicker: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: 10,
  },
  inputNumber: {
    padding: 10,
    borderWidth: 1,
    maxHeight: 50,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: MyColors.backgrounddefault,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textButton: {
    color: MyColors.primarydefault,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddEditBudgetScreen;
