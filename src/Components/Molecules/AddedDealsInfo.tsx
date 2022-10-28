import { SmallLabel } from '../Atoms/SmallLabel';
import { View } from 'react-native';
import React from 'react';

export interface Props {
  addedDealsNumberColor: string;
  dealsCount: number;
}

export const AddedDealsInfo = ({
  dealsCount,
  addedDealsNumberColor,
}: Props) => {
  return (
    <View className={'flex flex-row'}>
      <SmallLabel content={'Added deals: '} customStyles={'text-white'} />
      <SmallLabel
        content={dealsCount.toString()}
        customStyles={addedDealsNumberColor}
      />
    </View>
  );
};
