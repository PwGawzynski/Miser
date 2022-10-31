import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export const Home = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView className={'min-h-screen bg-black'}>
      <View className={'min-w-max flex-1 items-center justify-center bg-black'}>
        <Text className={'text-white'}>Witam w domu kurwa.</Text>
      </View>
    </SafeAreaView>
  );
};
