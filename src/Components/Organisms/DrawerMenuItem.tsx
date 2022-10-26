import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export interface Props {
  screenName: string;
}

export function DrawerMenuItem({ screenName }: Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenName as never)}
      className={'h-12 min-w-full  items-center justify-center bg-bermuda '}
    >
      <Text className={'text-2xl'}>{screenName}</Text>
    </TouchableOpacity>
  );
}
