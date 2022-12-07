import { Text } from 'react-native';
import React from 'react';

export interface Props {
  OfferWhere: string;
}

export const OfferWherePlaceholder = ({ OfferWhere }: Props) => {
  return (
    <Text
      style={{
        left: 10,
        top: 165,
        position: 'absolute',
        fontSize: 15,
        color: '#848484',
      }}
    >
      {`${OfferWhere}`}
    </Text>
  );
};
