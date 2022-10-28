import React from 'react';
import { View } from 'react-native';
import { LargeLabel } from '../Atoms/LargeLabel';
import { AddedDealsInfo } from '../Molecules/AddedDealsInfo';

export const UserAccountCard = () => {
  return (
    <View className={'flex h-96 w-screen flex-row items-center justify-start '}>
      <View className={'h-40 w-40 rounded-2xl bg-white'}></View>
      <View className={'flex-column flex'}>
        <LargeLabel content={'User_name'} />
        <AddedDealsInfo
          addedDealsNumberColor={'text-orange ml-0'}
          dealsCount={100}
        />
      </View>
    </View>
  );
};
