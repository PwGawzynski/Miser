import { SmallLabel } from '../Atoms/SmallLabel';
import { View } from 'react-native';
import React from 'react';

export interface Props {
  secondPartCustomStyles?: string;
  secondPartText?: string;
  firstPartText: string;
  children?: React.ReactNode;
  firstPartTextCustomStyles?: string;
  childrenContentOn: boolean;
}

export const SmallNote = ({
  firstPartText,
  firstPartTextCustomStyles,
  secondPartText,
  secondPartCustomStyles,
  children,
  childrenContentOn,
}: Props) => {
  return (
    <View className={'flex flex-row items-center justify-center'}>
      <SmallLabel
        content={firstPartText}
        customStyles={'text-white ' + (firstPartTextCustomStyles ?? '')}
      />
      {!childrenContentOn ? (
        <SmallLabel
          content={secondPartText ?? ''}
          customStyles={secondPartCustomStyles}
        />
      ) : (
        children
      )}
    </View>
  );
};
