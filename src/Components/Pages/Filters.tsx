import React, { useState } from "react";
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from "../Organisms/DrawerMenu";
import { SmallLabel } from "../Atoms/SmallLabel";
import { CustomInput } from "../Atoms/CustomInput";
import { ScreenNameWBackArrow } from "../Molecules/ScreenNameWBackArrow";
import { AppButton } from "../Atoms/AppButton";
type Props = NativeStackScreenProps<RootStackParamList, 'Filters'>;
export const Filters = ({ navigation, route }: Props) => {
  const [hotDealValue, setHotDealValue] = useState('');
  const [goodLowerScore, SetGoodLowerScore] = useState('');
  const [goodHigherScore, setGoodHigherScore] = useState('');
  const [days, setDays] = useState('');
  return (
    <SafeAreaView className={'bg-black w-screen h-screen flex flex-column justify-start align-center'}>
    <View className={'h-max w-max'}>
      <ScreenNameWBackArrow
        screenName={'Filters'}
        onPress={navigation.goBack}
      />
      <View className={'w-max m-6'}>
        <SmallLabel customStyles={'ml-0 text-xl'} content={`Set the value of hot deal's`}/>
        <CustomInput customStyles={'w-6/12 text-3xl mt-4'} value={hotDealValue} setter={setHotDealValue} defaultValue={'1000'}/>
      </View>

      <View className={'w-max m-6'}>
        <SmallLabel customStyles={'ml-0 text-xl'} content={`Select the point range displayed in the GOOD tab`}/>
        <View className={'flex flex-row w-max'}>
          <CustomInput customStyles={'w-4/12 text-3xl mt-4 mr-24'} value={goodLowerScore} setter={SetGoodLowerScore} defaultValue={'500'}/>
          <CustomInput customStyles={'w-4/12 text-3xl mt-4'} value={goodHigherScore} setter={setGoodHigherScore} defaultValue={'800'}/>
        </View>
      </View>

      <View className={'w-max m-6'}>
        <SmallLabel customStyles={'ml-0 text-xl'} content={`After how many days the NEW deadline expires`}/>
        <View className={'w-max flex flex-row'}>
          <CustomInput customStyles={'w-2/12 text-3xl mt-4'} value={days} setter={setDays} defaultValue={'1000'}/>
          <Text className={'color-blackGray text-3xl color-white h-max pt-6 pl-4'}>day's</Text>
        </View>
      </View>
    </View>
    <AppButton customStyles={'w-screen  m-0 p-0 mt-60'} onPress={navigation.goBack} textContext={"SAVE"}/>
    </SafeAreaView>
);
};
