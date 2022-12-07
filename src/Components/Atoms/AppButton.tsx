import { Pressable, Text } from 'react-native';
import React from 'react';

export interface Props {
  onPress: () => any;
  textContext: string;
  customStyles?: string;
  textCustomStyles?: string;
}

export const AppButton = (props: Props) => {
  return (
    <Pressable
      onPress={props.onPress}
      className={
        'mt-20 mb-2 h-10 w-10/12 items-center justify-center rounded-lg bg-[#212121] ' +
        (props.customStyles ?? '')
      }
    >
      <Text
        className={
          'align-center items-center justify-self-center text-xl font-bold text-white' +
          (props.textCustomStyles ?? '')
        }
      >
        {props.textContext}
      </Text>
    </Pressable>
  );
};
