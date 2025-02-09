import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ############################################################
// UserInput Component - Allows users to enter and save their name
// ============================================================
export default function UserInput() {
  const [username, setUsername] = useState('');

  // Load stored username when app starts
  useEffect(() => {
    loadUsername();
  }, []);

  // Function to load stored username
  const loadUsername = async () => {
    try {
      const storedName = await AsyncStorage.getItem('username');
      if (storedName !== null) {
        setUsername(storedName); // Set the stored name in state
      }
    } catch (error) {
      console.error('Error loading username:', error);
    }
  };

  // Function to handle input and save it
  const handleSave = async () => {
    if (username.trim().length > 0) {
      try {
        await AsyncStorage.setItem('username', username);
        alert(`Username saved: ${username}`);
      } catch (error) {
        console.error('Error saving username:', error);
      }
    } else {
      alert('Please enter a valid username.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name here..."
        value={username}
        onChangeText={setUsername} // Updates state as user types
      />
      <Button title="Save Name" onPress={handleSave} />
    </View>
  );
}

// ############################################################
// Styles for better UX
// ============================================================
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF', // Sets the text color to white
    borderRadius: 3, // Rounds the corners of the container
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 3,
    borderColor: '#FF8E01',
    borderRadius: 3, // Rounds the corners of the container
    color: '#FFF',
    marginBottom: 20,
  },
});
