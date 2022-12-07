import { Text } from 'react-native';
import React from 'react';

export interface Props {
  OfferName: string;
}

export const OfferNamePlaceholder = ({ OfferName }: Props) => {
  return (
    <Text
      style={{
        left: 10,
        bottom: 30,
        fontSize: 18,
        position: 'absolute',
        color: '#fff',
        fontWeight: '500',
      }}
    >
      {`${OfferName}`}
    </Text>
  );
};
