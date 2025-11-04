import { ButtomCustom } from '@/components/Button';
import { useTheme } from '@/contexts/theme-provider';
import { removeSelectedApp } from '@/services/selected-app';
import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();
  const { theme, themeStyle, toggleTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  const navigateToDetails = useCallback(() => {
    removeSelectedApp();
    router.replace('/');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: themeStyle.background }]}>
      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, { color: themeStyle.text }]}>
          Modo Escuro
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>

      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <ButtomCustom
          title="Trocar App"
          onPress={navigateToDetails}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingLabel: {
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  buttonContainer: {
    marginTop: 20,
  }
});
