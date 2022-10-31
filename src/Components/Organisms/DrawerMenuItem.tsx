import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { LargeLabel } from '../Atoms/LargeLabel';

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
      <LargeLabel content={props.name} customStyles={'ml-8'} />
    </TouchableOpacity>
  );
}
