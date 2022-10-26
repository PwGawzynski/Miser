import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { DrawerMenuItem } from '../../Components/Organisms/DrawerMenuItem';

export interface CustomDrawerProps extends DrawerContentComponentProps {
  screenList: string[];
}

export function CustomDrawer(props: CustomDrawerProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View className={'items-center justify-center bg-metal'}>
        {props.screenList.map((screenName) => (
          <DrawerMenuItem screenName={screenName} key={screenName} />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
