import { Text } from 'react-native';
import React from 'react';

export interface Props {
  OfferPrice: number | string;
}

export const OfferPricePlaceholder = ({ OfferPrice }: Props) => {
  let zl = 'zł';
  if (typeof OfferPrice === 'string') {
    zl = '';
  }
  return (
    <Text
      style={{
        alignSelf: 'flex-end',
        top: 140,
        right: 10,
        fontSize: 22,
        color: '#EAA566',
        position: 'absolute',
        fontWeight: '500',
      }}
    >
      {`${OfferPrice} ${zl}`}
    </Text>
  );
};
