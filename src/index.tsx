import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-bubble-gum">
        Witam kurwa brać się do roboty szmaty
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
