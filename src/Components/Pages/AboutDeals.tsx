import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../index';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = NativeStackScreenProps<RootStackParamList, 'AboutDeals'>;
export const AboutDeals = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView className={'min-h-screen bg-midnight'}>
      <View className={'min-w-max flex-1 items-center justify-center bg-metal'}>
        <Text className={'text-white'}>Witam w About Deals kurwa.</Text>
      </View>
    </SafeAreaView>
  );
};
