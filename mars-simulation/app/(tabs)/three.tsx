import React, { useState } from 'react'; // Import React and useState hook
import { StyleSheet, Image } from 'react-native'; // Core components for styling and layout
import { Text, View } from '@/components/Themed'; // Custom themed components supporting light/dark mode
import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker for map rendering

/**
 * A screen that displays a map with predefined markers representing different locations.
 *
 * @component
 * @returns {JSX.Element} The rendered React Native map component.
 */
export default function TabThreeScreen(): JSX.Element {
	/**
	 * State to manage an array of markers on the map.
	 * Each marker includes latitude/longitude, title, and description.
	 *
	 * @type {Array<{ latlng: { latitude: number; longitude: number }; title: string; description: string }>}
	 */
	const [markers, setMarkers] = useState([
		{
			latlng: { latitude: 30.3285, longitude: -81.6613 },
			title: "Zephyria",
			description: "The floating city of winds and wonders.",
		},
		{
			latlng: { latitude: 30.3300, longitude: -81.6620 },
			title: "Solmara",
			description: "A sun-kissed metropolis known for its golden towers.",
		},
		{
			latlng: { latitude: 30.3310, longitude: -81.6630 },
			title: "Khem",
			description: "The great city of Khem facing the sea.",
		},
	]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        /**
         * Defines the initial region displayed on the map.
         * The latitude and longitude values determine the map's center,
         * while latitudeDelta and longitudeDelta control the zoom level.
         */
        initialRegion={{
          latitude: 30.3285,
          longitude: -81.6613,
          latitudeDelta: 0.00013,
          longitudeDelta: 0.00013,
        }}
      >
        {/* Render a Marker for each item in the markers array */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}

/**
 * Stylesheet for the component.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen height
  },
  map: {
    width: '100%', // Full width of the screen
    height: '100%', // Full height of the screen
  },
});
