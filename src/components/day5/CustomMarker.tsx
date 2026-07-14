import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ apartment, onPress }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View style={styles.markerContainer}>
        <Text style={styles.markerText}>${apartment.price}</Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 4, // Gives the price text a bit more breathing room on the sides
    borderWidth: 1,
    borderColor: '#cbd5e1', // A slightly softer gray (Tailwind slate-300) for a modern look
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
    // Subtle shadow to lift the marker off the map
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  markerText: {
    fontFamily: 'InterBold',
    fontSize: 12,
    color: '#000000',
  },
});

export default CustomMarker;