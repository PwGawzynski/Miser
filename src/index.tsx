import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-bubble-gum">KURWAAAA DZIAŁAJ </Text>
      <Text className="text-bubble-gum">TEST KUPA 123</Text>
      <View className="bg-midnight"></View>
      <StatusBar style="auto" />
    </View>
  );
}
