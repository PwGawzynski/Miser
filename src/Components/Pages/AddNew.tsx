import React, { useContext, useState } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenNameWBackArrow } from '../Molecules/ScreenNameWBackArrow';
import { NewDealForm } from "../Organisms/NewDealForm";


type Props = NativeStackScreenProps<RootStackParamList, 'AddNew'>;

export interface DealInfoObj {
  link: string;
  name: string;
  companyName: string;
  desc: string;
  price: string;
  oldPrice: string;
  shoppingCost: string;
  dateOf: string;
}


export const AddNew = ({ navigation, route }: Props) => {


  // screen name can be removed, to do this provide empty string to
  // screenName prop
  return (
    <SafeAreaView
      className={'h-screen w-screen items-center justify-start bg-black p-0'}
    >
      <ScreenNameWBackArrow
        screenName={'ADD NEW'}
        onPress={navigation.goBack}
      />
      <NewDealForm navigation={navigation} route={route}/>
    </SafeAreaView>
  );
};
