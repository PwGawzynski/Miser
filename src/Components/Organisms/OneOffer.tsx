import { Offer } from '../Pages/Good';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { PointsInfo } from '../Molecules/PointsInfo';
import { OfferNamePlaceholder } from '../Molecules/OfferNamePlaceholder';
import { OfferWherePlaceholder } from '../Molecules/OfferWherePlaceholder';
import { OfferPricePlaceholder } from '../Molecules/OfferPricePlaceholder';
import { OfferAdditionalInfo } from '../Molecules/OfferAdditionalInfo';
import React from 'react';
import { TabNavigatorParamList } from '../../Navigation/TabBarNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    boxShadow: '10px 20px 30px red',
  },
  offer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 10,
    boxShadow: '10px 20px 30px red',
  },
});
type NavProps = NativeStackScreenProps<
TabNavigatorParamList,
'Good' | 'New' | 'TheBest'
>;

export interface Props {
  offer: Offer;
}

export const OneOffer = ({ offer, navigation, route }: Props & NavProps) => {
  return (
    <View style={styles.offer}>
      <ImageBackground
        source={offer.photo}
        style={styles.imageBg}
        imageStyle={{
          borderRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <PointsInfo points={offer.points} />
        <OfferNamePlaceholder OfferName={offer.name} />
        <OfferWherePlaceholder OfferWhere={offer.where} />
        <OfferPricePlaceholder OfferPrice={offer.price} />
        <OfferAdditionalInfo
          OfferShip={offer.ship}
          OfferDiscount={offer.discount}
        />
      </ImageBackground>
    </View>
  );
};
