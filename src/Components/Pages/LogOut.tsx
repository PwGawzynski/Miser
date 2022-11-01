import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { AuthContextProvider } from '../../index';
import { LargeLabel } from '../Atoms/LargeLabel';

type Props = NativeStackScreenProps<RootStackParamList, 'LogOut'>;
export const LogOut = ({ navigation, route }: Props) => {
  const auth = useContext(AuthContextProvider);
  return (
    <SafeAreaView className={'flex-1 bg-black'}>
      <View className={'min-w-max flex-1 items-center justify-center bg-black'}>
        <LargeLabel content={'Are you sure ? '} customStyles={'mb-6'} />
        <LargeLabel content={'Click below to logout'}></LargeLabel>
        <Pressable
          className={'mt-24 w-6/12 items-center rounded-md bg-white p-3'}
          onPress={() => auth?.logOut()}
        >
          <Text className={'text-xl text-orange'}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
