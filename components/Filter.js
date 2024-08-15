import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Filter = ({ selectedColor, onSelectColor, colors }) => {
  return (
    <View style={styles.filterContainer}>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorButton,
            { backgroundColor: color },
            selectedColor === color && styles.selectedColorButton
          ]}
          onPress={() => onSelectColor(color)}
        >
          <Text style={styles.colorButtonText}>
            {selectedColor === color ? '✔' : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: '#D94A01',
  },
  colorButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Filter;
