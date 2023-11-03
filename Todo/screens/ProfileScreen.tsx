// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }:any) => {
  const handleLogout = () => {
    // Handle logout logic, clear tokens, and navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {/* Display user details here */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21222D', // Background color
  },
  title: {
    fontSize: 24,
    color: '#676C78', // Text color
    marginBottom: 20,
  },
});

export default ProfileScreen;
