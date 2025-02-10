import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@react-navigation/native';

//TODO: Página placeholder aqui apenas com a funcionalidade de UI pra mudar o dark mode 
export default function SettingsScreen() {
  const systemColorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(systemColorScheme);
  const { colors } = useTheme();

  const handleToggleSwitch = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="title" style={{ color: colors.text }}>Configurações</ThemedText>
      <View style={styles.switchContainer}>
        <ThemedText style={{ color: colors.text }}>Dark Mode (Não funcional)</ThemedText>
        <Switch
          value={currentTheme === 'dark'}
          onValueChange={handleToggleSwitch}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
