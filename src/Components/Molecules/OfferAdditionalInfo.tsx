import { Text } from "react-native";
import React from "react";

export interface Props{
  OfferShip: string | number;
  OfferDiscount: string | number;

}

export const OfferAdditionalInfo = ({OfferShip, OfferDiscount}: Props)=>{
  return(
    <Text style={{color: "#fff", position: 'absolute', top: 165, right: 10}}>
      {`${OfferShip}`} {`${OfferDiscount}`}
    </Text>
  );
}
