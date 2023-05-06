import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Budget Item:</Text>
        <Picker
          selectedValue={title}
          onValueChange={handleTitleChange}
          style={styles.input}>
            {budgetTipe.map((item, index) => {
              return <Picker.Item label={item} value={item} key={item} />;
            })}
        </Picker>
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
      </View>
      <Button title="Submit" onPress={handleSubmit} />
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  inputNumber: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  }
});

export default AddEditBudgetScreen;
