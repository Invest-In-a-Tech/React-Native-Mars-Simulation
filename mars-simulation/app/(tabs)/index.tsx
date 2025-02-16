/**
 * Author: Roy Williams
 * Created: 2025-01-25
 * Assignment: React Native Mars Simulation

 * Description:
 * ------------
 * This is the TabOneScreen component for a React Native application. 
 * It serves as a welcoming screen displaying a background image, a welcome message, 
 * a separator line, and additional editable screen information. The screen is 
 * visually enhanced with custom theming using light and dark colors.

 * Dependencies:
 * -------------
 * 1. `react-native` for core components and StyleSheet.
 * 2. Custom components:
 *    - `EditScreenInfo`: Provides a path to the file for navigation and editing assistance.
 *    - `Themed` components (`Text`, `View`): Customized components supporting light and dark modes.

 * Usage:
 * ------
 * Import and render the `TabOneScreen` component wherever it's needed in the app. 
 * Example:
 * ```
 * import TabOneScreen from './path/to/TabOneScreen';
 * <TabOneScreen />
 * ```

 * Note:
 * -----
 * - The `ImageBackground` component sets a visually appealing full-screen background.
 * - The `styles` object uses `StyleSheet.create()` for modular, reusable styles.
 * - Custom light and dark colors in `View` ensure consistent theming throughout the app.
 */

import { ImageBackground, StyleSheet, Button } from 'react-native'; // Core components for layout and styling
import EditScreenInfo from '@/components/EditScreenInfo'; // Custom component to display file path info
import UserInput from '@/components/UserInput'; // Import the UserInput component
import { Text, View } from '@/components/Themed'; // Themed components for consistent app design
import { useState, useEffect } from 'react'; // Import a library to keep state in our app
import  AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage to store data}
import { Audio } from 'expo-av'; // Import Audio from expo-av to play audio

// ############################################################
// TabOneScreen Component
// ============================================================
// First we need to create a function that will be the background sound of thunder
function PlaySoundOfThunder() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      // here we load the sound file from the local directory
      await sound.loadAsync(require('../../assets/sound/thunder.mp3'));
      // Controls whether the sound should play in a loop
      await sound.setIsLoopingAsync(false);
      // Volume range is 0 - 1. 0 is off, 1 is max volume, do not set above 1.
      await sound.setVolumeAsync(1);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  })();
}

export default function TabOneScreen() {
  return (
    // The main container with dynamic theming
    <View style={styles.container} lightColor="#FFFFFF" darkColor="#000000">
      {/* Background image covering the entire screen */}
      <ImageBackground 
        source={require('../../assets/images/khem.jpg')} // Local image asset for background
        style={styles.image} // Apply image styles defined below
      >
        {/* Welcome message styled prominently */}
        <Text style={styles.title}>Welcome to Khem</Text>

        {/* User input field for interactive engagement */}
        <UserInput />
        
        {/* Separator for visual structure */}
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        {/* We will create a button that when pressed will play the sound of thunder */}
        <Button
          title="Play Sound of Thunder"
          color="#FF8E01" // Custom color for the button to match the theme
          onPress={PlaySoundOfThunder}
        />
        
        {/* Component displaying editable screen info */}
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </ImageBackground>
    </View>
  );
}

// ############################################################
// Styles for TabOneScreen
// ============================================================
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container occupies the entire screen
    // Align items and content center for better layout; commented for potential customization
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 40, // Large font size for emphasis
    fontWeight: 'bold', // Bold text for visual impact
    color: '#FF8E01', // Orange color to complement the theme
  },
  separator: {
    marginVertical: 30, // Adds space above and below the separator
    height: 1, // Creates a thin horizontal line
    width: '80%', // Makes the separator responsive to screen width
  },
  image: {
    flex: 1, // Ensures the image covers the entire container
    resizeMode: 'cover', // Scales the image to maintain aspect ratio while filling the screen
    alignItems: 'center', // Centers content horizontally within the image
    justifyContent: 'center', // Centers content vertically within the image
  },
});
