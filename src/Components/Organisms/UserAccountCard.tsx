import React, { useContext } from "react";
import { View } from 'react-native';
import { LargeLabel } from '../Atoms/LargeLabel';
import { SmallNote } from '../Molecules/SmallNote';
import { UserProfilePhoto } from './UserProfilePhoto';
import { UserContext } from "../../index";

export const UserAccountCard = () => {
  const userDataProvider = useContext(UserContext);

  return (
    <View className={'flex h-96 w-screen flex-row items-center justify-start '}>
      <UserProfilePhoto />
      <View className={'flex-column flex'}>
        <LargeLabel content={userDataProvider ? userDataProvider?.userData?.login : ''} customStyles={'ml-8'} />
        <SmallNote
          childrenContentOn={false}
          secondPartCustomStyles={'text-orange ml-0'}
          secondPartText={'100'}
          firstPartText={'Added deals: '}
        />
      </View>
    </View>
  );
};
