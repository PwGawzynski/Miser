import { Pressable, Text } from 'react-native';
import React from 'react';
export interface Props {
  children: string;
  customTextContentStyles?: string;
  customPressableStyles?: string;
  onPress: () => any;
}
export const PressableText = ({
  children,
  customTextContentStyles,
  customPressableStyles,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={
        'justify-content-center w min-w-max items-center ' +
        (customPressableStyles ?? '')
      }
    >
      <Text
        className={
          'text-center text-orange underline ' + (customTextContentStyles ?? '')
        }
      >
        {children}
      </Text>
    </Pressable>
  );
};
