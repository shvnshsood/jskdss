import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name='index'
        options={{
            headerShown:false
        }}/> 
         <Stack.Screen name='home/index'
        options={{
            headerShown:false
        }}/> 
    </Stack>
  );
}
