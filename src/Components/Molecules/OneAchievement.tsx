import { Text, View } from "react-native";
import React from "react";
import AchievementsSVG from '../../assets/Achievements.svg';

export interface Props{
  children: React.ReactNode;
  checked: boolean;
}

export const OneAchievement = ({children, checked} : Props)=>{
  return(
    <View className={'flex flex-row p-6 pl-10 pr-10 justify-items-center items-center bg-blackGray rounded-lg mb-4'}>
      <AchievementsSVG className={(checked ? 'color-white':'color-gray') + ' ' + 'min-h-max'}/>
      <Text className={'text-3xl color-gray font-bold justify-self-stretch ml-2'+ ' ' +(checked ? 'color-white':'')}>
        {children}
      </Text>
    </View>
  )
}
