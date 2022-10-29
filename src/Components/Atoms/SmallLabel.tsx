import { Text } from 'react-native';
import React from 'react';

export interface Props {
  content: string;
  customStyles?: string;
}

export const SmallLabel = (props: Props) => {
  return (
    <Text className={'ml-8 text-sm ' + (props.customStyles ?? '')}>
      {props.content}
    </Text>
  );
};
