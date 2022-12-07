import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabNavigatorParamList } from "../../Navigation/TabBarNavigation";
import { OneOffer } from "../Organisms/OneOffer";
import { offerTheBest } from "../../../static/staticDat";
import { OfferDetails } from './OfferDetails';



type Props = NativeStackScreenProps<TabNavigatorParamList, 'TheBest'>;


export const TheBest = ({ navigation, route }: Props) => {
  const offerList = offerTheBest.map((offer) => {
    return (

      <TouchableOpacity
        key={offer.id}
        style={{ width: '99%', height: 200 }}
        className={'mb-1'}


        onPress={()=>{
          navigation.navigate("OfferDetails",{offer:offer});
        }}>
        <OneOffer offer={offer} navigation={navigation} route={route}/>
      </TouchableOpacity>
    );
  });

  return (
      <ScrollView style = {styles.scroll}>
        <SafeAreaView>
          {offerList}
        </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#000',
  },
});
