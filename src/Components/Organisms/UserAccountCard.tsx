import React from 'react';
import { View } from 'react-native';
import { LargeLabel } from '../Atoms/LargeLabel';
import { AddedDealsInfo } from '../Molecules/AddedDealsInfo';
import { UserProfilePhoto } from './UserProfilePhoto';

export const UserAccountCard = () => {
  return (
    <View className={'flex h-96 w-screen flex-row items-center justify-start '}>
      <UserProfilePhoto />
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
