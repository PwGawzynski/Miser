import React, { useContext, useState } from "react";
import {View, Text} from "react-native";
import { SafeAreaView } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { OneOffer } from "../Organisms/OneOffer";
import { offerTheBest } from "../../../static/staticDat";

type Props = NativeStackScreenProps<RootStackParamList, 'OfferDetails'>;

export const OfferDetails = ({ navigation, route }: Props) => {
    return (
        <SafeAreaView>
            <Text>MURWA KAĆ</Text>
        </SafeAreaView>
    )

};