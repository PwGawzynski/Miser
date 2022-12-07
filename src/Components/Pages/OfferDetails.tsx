import React, { useContext, useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, ImageBackground, Button} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { OneOffer } from "../Organisms/OneOffer";
import { offerTheBest } from "../../../static/staticDat";
import { OfferNamePlaceholder } from "../Molecules/OfferNamePlaceholder";
import { Offer } from "./Good";
import { PointsInfo } from "../Molecules/PointsInfo";
import { OfferWherePlaceholder } from "../Molecules/OfferWherePlaceholder";
import { OfferAdditionalInfo } from "../Molecules/OfferAdditionalInfo";
import { OfferPricePlaceholder } from "../Molecules/OfferPricePlaceholder";

type NavProps = NativeStackScreenProps<RootStackParamList, 'OfferDetails'>;

export interface Props{
    offer: Offer;
  }

export const OfferDetails = ({ offer, navigation, route }: Props &NavProps) => {
    const offer1 = route.params?.offer;
    console.log(route.params, " 123123");
    return (
        <SafeAreaView className={'h-screen w-screen items-center justify-start bg-black p-0 flex-1'}>
            <View style={styles.container}>
                <View style={styles.offer}>
                    <ImageBackground source={route.params?.photo} style={styles.imageBg} imageStyle={{borderRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                        <PointsInfo points={route.params?.points}/>
                        <OfferNamePlaceholder OfferName={route.params?.name}/>
                        <OfferWherePlaceholder OfferWhere={route.params?.where}/>
                        <OfferPricePlaceholder OfferPrice={route.params?.price}/>
                        <OfferAdditionalInfo OfferShip={route.params?.ship} OfferDiscount={route.params?.discount}/>
                    </ImageBackground>
                </View>
                <View style={styles.offerInfo}>
                    <Text style={styles.txt}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aspernatur repudiandae nam sit odio doloremque, ipsum fugiat rem facere vel.</Text>
                    <Text style={styles.bottomtext}>Date of addition</Text>
                    <Text>...</Text>
                    <Text style={styles.bottomtext}>Added by</Text>
                    <Text>...</Text>
                    <View style={styles.btn1}>
                     <Button title="GO TO DEAL" color={'#434242'}/>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
        
    );

};

const styles = StyleSheet.create({
    bottomtext: {
        position: 'relative',
        top: 300,
        left: 10,
        color: '#FFF',
        fontWeight: 'bold',
    },
    bottomtext2: {
        position: "relative",
        color: "#FFF",
        fontWeight: "normal",
    },
    btn1: {
        position: 'absolute',
        alignSelf: "center",
        alignContent: "center",
        width: '50%',
        top: 550,
    },
    container: {
        display:'flex',
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
    },
    imageBg: {
        width: "100%",
        height: "100%",
        display: "flex",
      },
      offer: {
        width: "93%",
        height: "25%",
        borderRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        top: 20,
        left: 15,
      },
      offerInfo: {
        height: '75%',
        padding: 30,
        margin: 15,
        marginTop: 0,
        backgroundColor: '#222222'

      },
      txt: {
        top: 30,
        fontSize: 20,
        color: '#FFF',
      },
      
})




    
