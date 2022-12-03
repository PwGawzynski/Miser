import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigatorParamList } from '../../Navigation/TabBarNavigation';

type Props = NativeStackScreenProps<TabNavigatorParamList, 'Good'>;
export const Good = ({ navigation, route }: Props) => {

  const offers = [

    {
      id: 1,
      name: "Nike Shoes",
      where: "nike.com",
      points: 987,
      price: 900.99,
      ship: "free",
      discount: "2500zł (-64%)",
      photo: require("../../images/nike.jpg"),
    },
    {
      id: 2,
      name: "Apple MacBook Air",
      where: "apple.com",
      points: 1203,
      price: 5099.99,
      ship: "",
      discount: "6500zł (-21%)",
      photo: require("../../images/mac.jpg"),
    },
    {
      id: 3,
      name: "Bourbon Four Roses",
      where: "Biedronka",
      points: -43,
      price: 120.00,
      ship: "500zł",
      discount: "129zł (-7%)",
      photo: require("../../images/bourbon.jpg"),
    },
    {
      id: 4,
      name: "Book for a tree",
      where: "Tree Foundation",
      points: 433,
      price: "free",
      ship: "",
      discount: "",
      photo: require("../../images/tree.jpg"),
    },

  ];

  const offerList = offers.map((offer) => {
    return (
      <TouchableOpacity
        key={offer.id}
        style={{width:"99%",height:200}}>
        <View style={styles.offer}>
          <ImageBackground source={offer.photo} style={styles.imageBg} imageStyle={{borderRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            {/*//TODO tu trzeba to podzielić na komponenty osobne*/}

            {/*//TODO dodać plus i minus do tych ptk */}
            {/*KOMPONENT*/}
            <View style={styles.points}>
            <Text style={{ fontSize: 16, color: "#FFF"}}>
                {`${offer.points}`}
            </Text>
            </View>

            {/*KOMPONENT*/}
            <Text style={{left: 10, top: 145, fontSize: 22, position: 'absolute', color: "#FFF"}}>
                {`${offer.name}`}
            </Text>


            {/*KOMPONENT*/}
            <Text style={{left: 10, top: 165, position: 'absolute', fontSize: 15, color: "#ffF"}}>
              {`${offer.where}`}
            </Text>

            {/*KOMPONENT*/}
            <Text style={{alignSelf:'flex-end', top:145, right: 10, fontSize:22, color: 'orange', position:'absolute'}}>
                {`${offer.price}`}
            </Text>

            {/*KOMPONENT*/}
            <Text style={{color: "#fff", position: 'absolute', top: 165, right: 10}}>
                {`${offer.ship}`} {`${offer.discount}`}
            </Text>

          </ImageBackground>

        </View>
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
  imageBg: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  offer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 10,
    marginBottom: 10,
  },
  points: {
    width: 125,
    height: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    alignItems: 'center',
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  scroll: {
    backgroundColor: '#000',
  },


})
