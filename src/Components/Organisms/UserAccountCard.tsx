import React from 'react';
import { View } from 'react-native';
import { LargeLabel } from '../Atoms/LargeLabel';
import { SmallLabel } from '../Atoms/SmallLabel';

export const UserAccountCard = () => {
  return (
    <View className={'flex h-96 w-screen flex-row items-center justify-start '}>
      <View className={'h-40 w-40 rounded-2xl bg-white'}></View>
      <View className={'flex-column flex'}>
        <LargeLabel content={'User_name'} />
        <View className={'flex flex-row'}>
          <SmallLabel content={'Added deals '} className={'m-0'} />
          <SmallLabel content={'100'} className={'text-green-300 m-0'} />
        </View>
      </View>
    </View>
  );
};
