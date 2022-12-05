import { View } from "react-native";
import { BigText } from "../Atoms/BigText";
import React from "react";

export const SearchExamples = ()=>{
  return (<View className={'flex min-w-max'}>
    <BigText customStyles={'color-gray mt-10'}>Examples</BigText>
    <View className={'flex-row flex-wrap'}>
      <BigText customStyles={'color-white '}>Holiday</BigText>
      <BigText customStyles={'color-white pl-1'}>MacBook</BigText>
      <BigText customStyles={'color-white pl-1'}>Shoes</BigText>
      <BigText customStyles={'color-white '}>Electronic</BigText>
      <BigText customStyles={'color-white pl-1'}>McDonald</BigText>
      <BigText customStyles={'color-white pl-1'}>Books</BigText>
      <BigText customStyles={'color-white '}>Games</BigText>
    </View>
  </View>)
}
