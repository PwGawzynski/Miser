import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { ScreenNameWBackArrow } from '../Molecules/ScreenNameWBackArrow';
import { UserProfilePhoto } from '../Organisms/UserProfilePhoto';
import { AppButton } from '../Atoms/AppButton';
type Props = NativeStackScreenProps<RootStackParamList, 'AccountSettings'>;
export const AccountSettings = ({ navigation, route }: Props) => {
  console.log(navigation);
  return (
    <SafeAreaView className={'min-h-screen bg-black'}>
      <ScreenNameWBackArrow
        screenName={'Account settings'}
        onPress={() => navigation.goBack()}
      ></ScreenNameWBackArrow>
      <View
        className={'min-w-max flex-1 items-center justify-start bg-black pt-20'}
      >
        <UserProfilePhoto />
        <AppButton
          onPress={() => {
            console.log('CHANGE IMAGE CLICKED');
          }}
          textContext={'CHANGE IMAGE'}
        />
      </View>
    </SafeAreaView>
  );
};
