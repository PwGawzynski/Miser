import { Text } from 'react-native';
import React from 'react';

export interface Props {
  content: string;
  className?: string;
}

export const SmallLabel = (props: Props) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    <Text className={'ml-8 text-sm text-white ' + props.className}>
      {props.content}
    </Text>
  );
};
