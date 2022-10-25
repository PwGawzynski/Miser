import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { DrawerMenuItem } from '../../Components/Organisms/DrawerMenuItem';

export function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View className={'items-center justify-center bg-metal'}>
        <Text className={'text-white'}>Elo elo z drawera</Text>
        <DrawerMenuItem screenName={'Home'} />
      </View>
    </DrawerContentScrollView>
  );
}
