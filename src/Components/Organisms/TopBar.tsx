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
  const asdf = 'asdf';
  return (
    <View className={'flex h-10 w-screen flex-row justify-center'}>
      <View className={'h-full w-1/2 justify-center pl-5'}>
        <TouchableOpacity
          // TODO change this path
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <HamburgerSVG />
        </TouchableOpacity>
      </View>
      <View
        className={'flex h-full w-1/2 flex-row items-center justify-end pr-5 '}
      >
        <TouchableOpacity
          className={'pr-1'}
          onPress={() => navigation.navigate('AccountSettings')}
        >
          <SearchSVG height={'100%'} />
        </TouchableOpacity>
        <TouchableOpacity
          className={'pl-5'}
          onPress={() => navigation.navigate('AddNew')}
        >
          <AddSVG height={'100%'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
