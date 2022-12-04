import { Text } from "react-native";
import React from "react";

export interface Props{
  OfferName: string;
}

export const OfferNamePlaceholder = ({OfferName}: Props)=>{
  return(
    <Text style={{left: 10, top: 145, fontSize: 22, position: 'absolute', color: "#FFF"}}>
      {`${OfferName}`}
    </Text>

  );
}
