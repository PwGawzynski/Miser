import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { DrawerMenuItem } from '../../Components/Organisms/DrawerMenuItem';
import Home from '../../assets/Home.svg';
import AccountSettingsSVG from '../../assets/AccountSettings.svg';
import FiltersSVG from '../../assets/Filters.svg';
import AchievementsSVG from '../../assets/Achievements.svg';

export function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View className={'items-center justify-center bg-black pl-11'}>
        {/* home drawer menu BTN */}
        <DrawerMenuItem {...props} name={'Home'} nameForNavigator={'Home'}>
          <Home />
        </DrawerMenuItem>
        <DrawerMenuItem
          {...props}
          name={'Account Settings'}
          nameForNavigator={'AccountSettings'}
        >
          <AccountSettingsSVG />
        </DrawerMenuItem>
        <DrawerMenuItem
          {...props}
          name={'Filters'}
          nameForNavigator={'Filters'}
        >
          <FiltersSVG />
        </DrawerMenuItem>
        <DrawerMenuItem
          {...props}
          name={'Achievements'}
          nameForNavigator={'Achievements'}
        >
          <AchievementsSVG />
        </DrawerMenuItem>
        <DrawerMenuItem
          {...props}
          name={'Log Out'}
          nameForNavigator={'Achievements'}
        >
          <AchievementsSVG />
        </DrawerMenuItem>
      </View>
    </DrawerContentScrollView>
  );
}
