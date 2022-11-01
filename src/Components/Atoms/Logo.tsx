import React from 'react';
import { Text, View } from 'react-native';

export interface Props {
  customStyles?: string;
  customTextStyles?: string;
  children?: React.ReactNode;
}

export const Logo = ({ customTextStyles, customStyles, children }: Props) => {
  return (
    <View
      className={
        'mb-32 w-screen items-center justify-center ' + (customStyles ?? '')
      }
    >
      <Text
        className={'text-5xl font-bold text-orange ' + (customTextStyles ?? '')}
      >
        Miser
      </Text>
      {children}
    </View>
  );
};
