import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigatorParamList } from '../../Navigation/TabBarNavigation';
import { offers } from "../../../static/staticDat";
import { OneOffer } from "../Organisms/OneOffer";

type Props = NativeStackScreenProps<TabNavigatorParamList, 'Good'>;

export interface Offer{
  id: number;
  name: string;
  where: string;
  points: number;
  price: string|number;
  ship: string|number;
  discount: string|number;
  photo: any;
}



export const Good = ({ navigation, route }: Props) => {

  const offerList = offers.map((offer) => {
    return (
      <TouchableOpacity
        key={offer.id}
        style={{width:"99%",height:200}}
        onPress={()=>{
          navigation.navigate("OfferDetails", offer);
        }}
      >
       <OneOffer offer={offer} navigation={navigation} route={route}/>
      </TouchableOpacity>
    )
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
})


