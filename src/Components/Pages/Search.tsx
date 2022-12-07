import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { TopBar } from '../Organisms/TopBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { ScreenNameWBackArrow } from '../Molecules/ScreenNameWBackArrow';
import { CustomInput } from '../Atoms/CustomInput';
import { BigText } from '../Atoms/BigText';
import { SearchExamples } from '../Molecules/SearchExamples';
import { AppButton } from "../Atoms/AppButton";
import Magnifier from '../../assets/search-input.svg';


type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'AccountSettings' | 'Achievements' | 'Filters' | 'AddNew'
>;
export const Search = ({ navigation, route }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView className={'h-screen w-screen bg-black pl-10 pr-10'}>
      <ScreenNameWBackArrow screenName={''} onPress={navigation.goBack} />
      <View className={'flex flex-row items-center justify-start'}>
        <CustomInput
          customStyles={'min-w-11/12'}
          value={inputValue}
          setter={setInputValue}
          defaultValue={'Search here'}
        />
        <TouchableOpacity
          className={'ml-6'}
          onPress={() => navigation.navigate("SearchResult")}
        >
          <Magnifier/>
        </TouchableOpacity>
      </View>
      <SearchExamples />
    </SafeAreaView>
  );
};
