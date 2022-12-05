import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { ScreenNameWBackArrow } from "../Molecules/ScreenNameWBackArrow";
import { OneAchievement } from "../Molecules/OneAchievement";
type Props = NativeStackScreenProps<RootStackParamList, 'Achievements'>;
export const Achievements = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView className={'w-screen h-screen bg-black'}>
      <ScreenNameWBackArrow screenName={"Achievements"} onPress={navigation.goBack} />
      <OneAchievement checked>
        Add Deal
      </OneAchievement>
      <OneAchievement checked={false}>
        Add 30 deal's
      </OneAchievement>

      <OneAchievement checked={false}>
        Your offer has 500 points
      </OneAchievement>

      <OneAchievement checked={false}>
        Your offer has 1000 points
      </OneAchievement>

      <OneAchievement checked={false}>
       Your offer was first on list
      </OneAchievement>

      <OneAchievement checked={false}>
        Top 1 on added list
      </OneAchievement>
    </SafeAreaView>
  );
};
