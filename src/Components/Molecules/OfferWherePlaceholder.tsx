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
        position: 'absolute',
        fontSize: 15,
        color: '#848484',
      }}
      className={'bottom-4'}
    >
      {`${OfferWhere}`}
    </Text>
  );
};
