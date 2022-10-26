import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export interface DrawerMenuItemProps extends DrawerContentComponentProps {
  name: string;
  nameForNavigator: string;
  children: React.ReactNode;
}

export function DrawerMenuItem({ ...props }: DrawerMenuItemProps) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(props.nameForNavigator)}
      className={
        'flex h-12 min-w-full  flex-row items-center justify-start bg-transparent'
      }
    >
      {props.children}
      <Text className={'ml-8 text-2xl text-white'}>{props.name}</Text>
    </TouchableOpacity>
  );
}
