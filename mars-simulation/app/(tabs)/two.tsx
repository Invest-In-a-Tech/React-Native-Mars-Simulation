/**
 * Author: Roy Williams
 * Created: 2025-01-25
 * Assignment: React Native Mars Simulation
 *
 * Description:
 * ------------
 * This component, `TabTwoScreen`, serves as one of the screens in the React Native 
 * application. It displays a title, an image, and additional editable screen information. 
 * The component leverages custom themed components and a local image asset to maintain 
 * consistent styling and theming throughout the app.
 *
 * Dependencies:
 * -------------
 * 1. `react` and `react-native` for core component definitions and styling.
 * 2. Custom components:
 *    - `EditScreenInfo2`: Displays additional screen information using a local image.
 *    - `Themed` components (`Text`, `View`): Custom components for supporting light/dark modes.
 *
 * Usage:
 * ------
 * Import and render the `TabTwoScreen` component within your navigation or as part 
 * of your application's tab structure.
 * Example:
 * ```
 * import TabTwoScreen from './path/to/TabTwoScreen';
 * <TabTwoScreen />
 * ```
 *
 * Note:
 * -----
 * - The image asset is imported locally using `require`. Ensure the file path is correct.
 * - The component applies flexbox for layout, centering its content both horizontally 
 *   and vertically.
 */

import React from 'react';
import { StyleSheet, Image } from 'react-native'; // Core components for layout, styling, and image rendering

import EditScreenInfo2 from '@/components/EditScreenInfo2'; // Custom component to display additional screen information
import { Text, View } from '@/components/Themed'; // Custom themed components supporting light/dark mode

// ############################################################
// TabTwoScreen Component
// ============================================================
export default function TabTwoScreen() {
  return (
    // Main container for the TabTwoScreen content with centered alignment
    <View style={styles.container}>
      {/* Title: Displays the main headings for the screen */}
      <Text style={styles.title}>Master Adeptist</Text>
      <Text style={styles.title}>Lucian va August</Text>

      {/* Image: Renders a local image asset with cover resize mode */}
      <Image 
        source={require('../../assets/images/lucian.jpg')} // Local image asset; update path if necessary
        style={styles.image}  // Apply image styling from the StyleSheet below
        resizeMode="cover"    // Ensures the image covers the container while maintaining its aspect ratio
      />

      {/* Editable Screen Information: Renders additional information using a custom component */}
      <EditScreenInfo2 path="app/(tabs)/two.tsx" />
    </View>
  );
}

// ############################################################
// Styles for TabTwoScreen
// ============================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,                   // Ensures the container occupies the full screen
    alignItems: 'center',      // Centers children horizontally
    justifyContent: 'center',  // Centers children vertically
  },
  title: {
    fontSize: 40,              // Large font size for emphasis
    fontWeight: 'bold',        // Bold text for visual impact
    color: '#FF8E01',          // Orange color to complement the theme
  },
  separator: {
    marginVertical: 30,        // Vertical spacing for separation
    height: 1,                 // Thin horizontal line
    width: '80%',              // Responsive width relative to the screen size
  },
  image: {
    flex: 1,                   // Allows the image to expand and fill available space
    width: '100%',             // The image spans the full width of its container
  },
});
