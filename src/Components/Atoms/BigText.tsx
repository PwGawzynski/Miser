import React from "react";
import { Text } from "react-native";

export interface Props{
  customStyles?:string;
  children: React.ReactNode
}

export const BigText = ({customStyles, children} : Props)=>{
  return (
    <Text className={'color-white text-2xl font-bold ' + ' ' +  (customStyles?customStyles:'')}>
      {children}
    </Text>
  )
}
