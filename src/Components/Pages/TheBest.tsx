import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlipInEasyX } from 'react-native-reanimated';
import { TabNavigatorParamList } from '../../Navigation/TabBarNavigation';
import { OneOffer } from '../Organisms/OneOffer';
import { offerTheBest } from '../../../static/staticDat';
type Props = NativeStackScreenProps<TabNavigatorParamList, 'TheBest'>;
export const TheBest = ({ navigation, route }: Props) => {
  const offerList = offerTheBest.map((offer) => {
    return (
      <TouchableOpacity
        key={offer.id}
        style={{ width: '99%', height: 200 }}
        className={'mb-1'}
      >
        <OneOffer offer={offer} navigation={navigation} route={route} />
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView>{offerList}</SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#000',
  },
});
