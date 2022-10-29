import { Text } from 'react-native';
import React from 'react';

export interface Props {
  content: string;
}

export const LargeLabel = (props: Props) => {
  return <Text className={'ml-8 text-2xl text-white'}>{props.content}</Text>;
};
