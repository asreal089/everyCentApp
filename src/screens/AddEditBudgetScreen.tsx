import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {MyColors} from '../styles/Color';

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
    // Handle form submission here
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
      <Text style={styles.label}>Limit:</Text>
      <TextInput
        style={styles.inputNumber}
        keyboardType="numeric"
        onChangeText={text => {
          return handleLimitChange(text.replace(/[^0-9]/g, ''));
        }}
        value={limit.toString()}
        maxLength={10}
      />
      <Picker
        selectedValue={title}
        onValueChange={handleTitleChange}
        style={styles.inputPicker}>
        {budgetTipe.map((item, index) => {
          return <Picker.Item label={item} value={item} key={item} />;
        })}
      </Picker>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
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
  inputContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    justifyContent: 'center',
  },
  inputPicker: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 10,
  },
  inputNumber: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
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
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddEditBudgetScreen;
