import React from 'react';
import { Pressable, View } from 'react-native';
import { LargeLabel } from '../Atoms/LargeLabel';
import BackRight from './../../assets/back.-right.svg';

export interface Props {
  screenName: string;
  onPress: () => any;
}

export const ScreenNameWBackArrow = ({ screenName, onPress }: Props) => {
  return (
    <View className={'flex w-full flex-row items-center justify-center pb-4'}>
      <LargeLabel
        content={screenName}
        customStyles={'w-6/12 pl-4 font-bold '}
      />
      <Pressable className={'w-6/12 items-end pr-4'} onPress={onPress}>
        <BackRight />
      </Pressable>
    </View>
  );
};
