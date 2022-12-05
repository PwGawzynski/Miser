import React from 'react';
import HamburgerSVG from './../../assets/hamburger.svg';
import AddSVG from './../../assets/add.svg';
import SearchSVG from './../../assets/search-input.svg';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './DrawerMenu';
import { DrawerActions } from '@react-navigation/native';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'AccountSettings' | 'Achievements' | 'Filters' | 'AddNew'
>;

export const TopBar = ({ navigation, route }: Props) => {
  return (
    <View className={'flex h-10 w-screen flex-row justify-center'}>
      <View className={'h-full w-1/2 justify-center pl-4'}>
        <TouchableOpacity
          // TODO change this path
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <HamburgerSVG />
        </TouchableOpacity>
      </View>
      <View className={'flex h-full w-1/2 flex-row items-center justify-end '}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
        >
          <SearchSVG height={'90%'} />
        </TouchableOpacity>
        <TouchableOpacity
          className={' pl-4'}
          onPress={() => navigation.navigate('AddNew')}
        >
          <AddSVG height={'70%'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
