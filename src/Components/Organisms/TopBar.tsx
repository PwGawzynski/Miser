import React from 'react';
import HamburgerSVG from './../../assets/hamburger.svg';
import AddSVG from './../../assets/add.svg';
import SearchSVG from './../../assets/search-input.svg';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './DrawerMenu';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'AccountSettings' | 'Achievements' | 'Filters'
>;

export const TopBar = ({ navigation, route }: Props) => {
  const asdf = 'asdf';
  return (
    <View className={'flex h-10 w-screen flex-row justify-center'}>
      <View className={'h-full w-1/2 justify-center pl-4'}>
        <TouchableOpacity
          // TODO change this path
          onPress={() => navigation.navigate('AccountSettings')}
        >
          <HamburgerSVG />
        </TouchableOpacity>
      </View>
      <View className={'flex h-full w-1/2 flex-row items-center justify-end '}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AccountSettings')}
        >
          <SearchSVG height={'90%'} />
        </TouchableOpacity>
        <TouchableOpacity
          className={' pl-4'}
          onPress={() => navigation.navigate('AccountSettings')}
        >
          <AddSVG height={'70%'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
