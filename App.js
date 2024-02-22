import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {isLocationEnabled} from 'react-native-android-location-enabler';
import {Platform} from 'react-native';

export default function App() {
  const handleCheckPressed = async () => {
    if (Platform.OS === 'android') {
      const checkEnabled = await isLocationEnabled();
      console.log('checkEnabled', checkEnabled);
    }
  };

  useEffect(() => {
    handleCheckPressed();
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
