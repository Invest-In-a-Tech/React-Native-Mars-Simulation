/**
 * Author: Roy Williams
 * Created: 2025-01-25
 * Assignment: React Native Mars Simulation
 *
 * Description:
 * ------------
 * This component, `EditScreenInfo2`, is a React Native functional component that 
 * displays a local image instead of styled text.
 *
 * Dependencies:
 * -------------
 * 1. `react` and `react-native` for component definitions and styling.
 * 2. `Colors` from the constants directory for maintaining consistent theming across the app.
 *
 * Usage:
 * ------
 * Import and use this component without needing to pass a prop, as the image is loaded locally.
 */

import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Colors from '@/constants/Colors'; // App-wide color constants for consistent theming

export default function EditScreenInfo2({ path }: { path: string }) {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',      // Centers the image horizontally
    marginHorizontal: 13,      // Adds horizontal margin around the container
  },
});
