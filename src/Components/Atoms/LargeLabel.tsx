import { Text } from 'react-native';
import React from 'react';

export interface Props {
  content: string;
  customStyles?: string;
}

export const LargeLabel = (props: Props) => {
  return (
    <Text className={'  text-2xl text-white  ' + (props.customStyles ?? '')}>
      {props.content}
    </Text>
  );
};
