import { Text } from 'react-native';
import React from 'react';

export interface Props {
  OfferPrice: number | string;
}

export const OfferPricePlaceholder = ({ OfferPrice }: Props) => {
  return (
    <Text
      style={{
        alignSelf: 'flex-end',
        top: 140,
        right: 10,
        fontSize: 22,
        color: 'orange',
        position: 'absolute',
      }}
    >
      {`${OfferPrice}`}
    </Text>
  );
};
