import { Text, View } from 'react-native';
import React from 'react';
import AchievementsSVG from '../../assets/Achievements.svg';

export interface Props {
  children: React.ReactNode;
  checked: boolean;
}

export const OneAchievement = ({ children, checked }: Props) => {
  return (
    <View
      className={
        'mb-4 flex flex-row items-center justify-items-center rounded-lg bg-blackGray p-6 pl-10 pr-10'
      }
    >
      <AchievementsSVG
        className={
          (checked ? 'color-white' : 'color-[#4d4d4d]') + ' ' + 'min-h-max'
        }
      />
      <Text
        className={
          'color-[#4d4d4d] ml-3 justify-self-stretch text-2xl font-bold' +
          ' ' +
          (checked ? 'color-white' : '')
        }
      >
        {children}
      </Text>
    </View>
  );
};
