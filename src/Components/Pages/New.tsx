import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigatorParamList } from '../../Navigation/TabBarNavigation';
import { OneOffer } from '../Organisms/OneOffer';
import { offerNew } from '../../../static/staticDat';
type Props = NativeStackScreenProps<TabNavigatorParamList, 'New'>;
export const New = ({ navigation, route }: Props) => {
  const offerList = offerNew.map((offer) => {
    return (
      <TouchableOpacity
        key={offer.id}
        style={{ width: '99%', height: 200 }}
        className={'mb-1'}
      >
        onPress={()=>{
          navigation.navigate("OfferDetails", offer);
        }}>
        <OneOffer offer={offer} navigation={navigation} route={route}/>
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
