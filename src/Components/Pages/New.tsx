import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigatorParamList } from '../../Navigation/TabBarNavigation';
type Props = NativeStackScreenProps<TabNavigatorParamList, 'New'>;
export const New = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView className={'min-h-screen bg-midnight'}>
      <View className={'min-w-max flex-1 items-center justify-center bg-metal'}>
        <Text className={'text-white'}>Witam w New kurwa.</Text>
      </View>
    </SafeAreaView>
  );
};
