import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { getHtmlContent } from './MapPage.html.js';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setSelectedCoords({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const onMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    setSelectedCoords({
      latitude: data.latitude,
      longitude: data.longitude,
    });
  };

  if (errorMsg) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <WebView
        originWhitelist={['*']}
        source={{ html: getHtmlContent(selectedCoords.latitude, selectedCoords.longitude) }}
        style={{ flex: 1, width: '100%', height: '40%' }}
        onMessage={onMessage}
      />
      <View style={{ padding: 10 }}>
        <Text>Selected Location:</Text>
        <Text>Latitude: {selectedCoords.latitude?.toFixed(12)}</Text>
        <Text>Longitude: {selectedCoords.longitude?.toFixed(12)}</Text>
      </View>
    </>
  );
}
