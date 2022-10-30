import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { AuthContextProvider } from '../../index';
type Props = NativeStackScreenProps<RootStackParamList, 'LogOut'>;
export const LogOut = ({ navigation, route }: Props) => {
  const auth = useContext(AuthContextProvider);
  return (
    <SafeAreaView className={'min-h-screen bg-midnight'}>
      <View className={'min-w-max flex-1 items-center justify-center bg-metal'}>
        <Text className={'text-white'}>Witam w LogOut Deals kurwa.</Text>
        <Pressable className={'bg-white'} onPress={() => auth?.logOut()}>
          <Text className={'text-orange'}>Log Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
