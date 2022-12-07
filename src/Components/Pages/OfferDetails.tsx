import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Button,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { OneOffer } from '../Organisms/OneOffer';
import { offerTheBest } from '../../../static/staticDat';
import { OfferNamePlaceholder } from '../Molecules/OfferNamePlaceholder';
import { Offer } from './Good';
import { PointsInfo } from '../Molecules/PointsInfo';
import { OfferWherePlaceholder } from '../Molecules/OfferWherePlaceholder';
import { OfferAdditionalInfo } from '../Molecules/OfferAdditionalInfo';
import { OfferPricePlaceholder } from '../Molecules/OfferPricePlaceholder';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../config';
import { AppButton } from '../Atoms/AppButton';

type NavProps = NativeStackScreenProps<RootStackParamList, 'OfferDetails'>;

export interface Props {
  offer: Offer;
}

export const OfferDetails = ({
  offer,
  navigation,
  route,
}: Props & NavProps) => {
  console.log(route.params?.offer, ' ELOOOOO');
  return (
    <SafeAreaView
      className={
        'h-screen w-screen flex-1 items-center justify-start bg-black p-0'
      }
    >
      <View style={styles.container}>
        <View style={styles.offer}>
          <ImageBackground
            source={route.params?.offer.photo}
            style={styles.imageBg}
            imageStyle={{
              borderRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <PointsInfo points={route.params?.offer.points} />
            <OfferNamePlaceholder OfferName={route.params?.offer.name} />
            <OfferWherePlaceholder OfferWhere={route.params?.offer.where} />
            <OfferPricePlaceholder OfferPrice={route.params?.offer.price} />
            <OfferAdditionalInfo
              OfferShip={route.params?.offer.ship}
              OfferDiscount={route.params?.offer.discount ?? '10 10'}
            />
          </ImageBackground>
        </View>
        <View style={styles.offerInfo}>
          <Text style={styles.txt}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aspernatur repudiandae nam sit odio doloremque, ipsum fugiat rem
            facere vel.
          </Text>
          <Text style={styles.bottomtext}>Date of addition</Text>
          <Text style={styles.bottomtext2}>23.10.2022r</Text>
          <Text style={styles.bottomtext}>Added by</Text>
          <Text style={styles.bottomtext2}>user</Text>
          <AppButton
            onPress={navigation.goBack}
            textContext={'GO TO DEAL'}
            customStyles={'bottom-2 left-5 absolute justify-center w-full'}
          ></AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomtext: {
    position: 'relative',
    top: 250,
    left: 10,
    color: '#848484',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomtext2: {
    position: 'relative',
    top: 250,
    left: 10,
    color: '#848484',
    fontWeight: 'normal',
  },
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  imageBg: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  offer: {
    width: '93%',
    height: '25%',
    borderRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    top: 50,
    left: 15,
  },
  offerInfo: {
    height: '70%',
    padding: 20,
    margin: 10,
    marginTop: 40,
    backgroundColor: '#111',
  },
  txt: {
    top: 30,
    fontSize: 14,
    color: '#848484',
  },
});
