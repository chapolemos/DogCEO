import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export const DogBreedDropdown = ({ options, onSelect }) => {
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handler de abertura/fechamento do dropdown
  const handleDropdownToggle = () => {
    if (!dropdownOpen) {
      setQuery('');
    }
    setDropdownOpen(prev => !prev);
  };

  // Handler pra alterar a query pelo texto escrito pra autocomplete
  const handleInputChange = (text) => {
    setQuery(text);
    if (!dropdownOpen) {
      setDropdownOpen(true)
    }
  };

  // Handler pra seleção de opção do menu
  const handleSelectOption = (item) => {
    setQuery(item.label);
    setDropdownOpen(false);
    if (onSelect) onSelect(item);
  };

  // Uso de filter pras opções disponiveis baseado na query do text input.
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ThemedView style={styles.autocompleteContainer}>
      <ThemedText type="subtitle">Selecione a Raça:</ThemedText>

      {/* Campo de texto pra query */}
      <TouchableOpacity onPress={handleDropdownToggle}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={query}
            onChangeText={handleInputChange}
            placeholder="Selecione a raça"
          />
        </View>
      </TouchableOpacity>

      {/* Dropdown com as raças de cachorro */}
      {dropdownOpen && (
        <View style={styles.listStyle}>
          <ScrollView style={styles.scrollView}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(item => (
                <TouchableOpacity
                  key={item.label}
                  onPress={() => handleSelectOption(item)}
                  style={styles.itemContainer}>
                  <ThemedText style={styles.itemText}>{item.label}</ThemedText>
                </TouchableOpacity>
              ))
            ) : (
              <ThemedView style={styles.itemContainer}>              
                <ThemedText style={styles.itemText}>Nenhum resultado encontrado.</ThemedText>
              </ThemedView>
            )}
          </ScrollView>
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  autocompleteContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
    position: 'relative',
  },
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    height: '100%',
    paddingVertical: 0,
  },
  listStyle: {
    position: 'absolute',
    top: 70, 
    left: 18,
    right: 18,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    zIndex:0,
    maxHeight: 200,
  },
  scrollView: {
    maxHeight: 200,
  },
  itemText: {
    color: 'black',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
});
