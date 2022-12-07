import { Text, View } from 'react-native';
import React from 'react';

export interface Props {
  OfferShip: string | number;
  OfferDiscount: string | number;
}

export const OfferAdditionalInfo = ({ OfferShip, OfferDiscount }: Props) => {
  const OfferDiscountWords = (OfferDiscount as string).split(' ');
  return (
    <View className={' absolute bottom-4 right-3 flex flex-row'}>
      <Text
        style={{ color: '#848484', marginRight: 10 }}
      >{`${OfferShip}`}</Text>
      <Text
        style={{
          color: '#848484',
          textDecorationLine: 'line-through',
          marginRight: 2,
        }}
      >
        {`${OfferDiscountWords[0]}`}
      </Text>
      <Text style={{ color: '#848484' }}>{`${OfferDiscountWords[1]}`}</Text>
    </View>
  );
};
