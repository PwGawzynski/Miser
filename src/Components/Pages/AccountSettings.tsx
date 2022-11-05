import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { TopBar } from '../Organisms/TopBar';
type Props = NativeStackScreenProps<RootStackParamList, 'AccountSettings'>;
export const AccountSettings = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView className={'min-h-screen bg-midnight'}>
      <TopBar navigation={navigation} route={route} />
      <View
        className={'min-w-max flex-1 items-center justify-center bg-metal'}
      ></View>
    </SafeAreaView>
  );
};
