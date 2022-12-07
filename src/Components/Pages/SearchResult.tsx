import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { ScreenNameWBackArrow } from '../Molecules/ScreenNameWBackArrow';
import { OneAchievement } from '../Molecules/OneAchievement';
type Props = NativeStackScreenProps<RootStackParamList, 'Achievements'>;
export const SearchResult = ({ navigation, route }: Props) => {
  return (
    <ScrollView className={'bg-black'}>
      <SafeAreaView className={'w-screen bg-black'}>
        <ScreenNameWBackArrow
          screenName={'Search Result'}
          onPress={navigation.goBack}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
