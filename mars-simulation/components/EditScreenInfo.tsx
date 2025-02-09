/**
 * Author: Roy Williams
 * Created: 2025-01-25
 * Assignment: React Native Mars Simulation

 * Description:
 * ------------
 * This component, `EditScreenInfo`, is a React Native functional component that 
 * displays a block of styled text. It includes descriptions and details about "Khem"

 * Dependencies:
 * -------------
 * 1. `react` and `react-native` for component definitions and styling.
 * 2. Custom components: `ExternalLink`, `MonoText`, and `Themed` components (`Text`, `View`).
 * 3. `Colors` from the constants directory for maintaining consistent theming across the app.

 * Usage:
 * ------
 * Use this component by importing it and passing the `path` prop as a string.

 * Note:
 * -----
 * - The `Text` and `View` components from `Themed` include custom theming logic 
 *   based on the app's light and dark modes.
 * - Styles are encapsulated using React Native's `StyleSheet` for clarity and modularity.
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink'; // External link component for linking
import { MonoText } from './StyledText'; // Mono-styled text component for inline code or emphasis
// import { Text, View } from './Themed'; // Themed text and view components with light/dark mode support
import { View, Text } from 'react-native';

import Colors from '@/constants/Colors'; // App-wide color constants for consistent theming

// ############################################################
// EditScreenInfo Component
// ============================================================
export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}>
          In the first ages, the gods divided the earth among themselves, 
          proportioning it according to their respective dignities. Each became the 
          peculiar deity of his allotment and established therein temples to himself, 
          ordained priestcraft, and instituted a system of sacrifice. To Dhroth was given 
          the sea and the island continent of Khem.
        </Text>

        <View>
          <Text></Text>
        </View>

        <Text
          style={styles.getStartedText}>
          Khem facing the sea is described as lofty and precipitous, but about 
          the central city is a plain sheltered by mountains renowned for their size, 
          number, and beauty. The plain yielded two crops each year, in the winter being 
          watered by rains and in the summer by immense irrigation canals, which were also 
          used for transportation. The plain is divided into sections, and in times of war, 
          each section supplied its quota of fighting men and the armadas.
        </Text>
      </View>
    </View>
  );
}

// ############################################################
// Styles for EditScreenInfo
// ============================================================
const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center', // Centers all child components horizontally
    marginHorizontal: 13, // Adds horizontal margin to the container
  },
  homeScreenFilename: {
    marginVertical: 7, // Adds vertical spacing above and below the filename container
  },
  codeHighlightContainer: {
    borderRadius: 3, // Rounds the corners of the container
    paddingHorizontal: 4, // Adds horizontal padding to create space inside
  },
  getStartedText: {
    fontSize: 17, // Sets a readable font size
    lineHeight: 24, // Ensures good spacing between lines of text
    textAlign: 'left', // Aligns text to the left for natural reading
    fontWeight: 'bold', // Makes the text bold
    color: '#FFFFFF', // Sets the text color to white
  },
});
