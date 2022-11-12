import { TouchableOpacity, View } from "react-native";
import { CustomInput } from "../Atoms/CustomInput";
import React, { useState } from "react";
import { DealInfoObj } from "../Pages/AddNew";
import { SmallLabel } from "../Atoms/SmallLabel";
import { CustomInputMultiline } from "../Atoms/CustomInputMultiline";
import { LargeLabel } from "../Atoms/LargeLabel";
import Plus from "../../assets/plus.svg";
import { AppButton } from "../Atoms/AppButton";

export const NewDealForm = () => {

  const [deal, setDeal] = useState({
    link:'',
    name: '',
    companyName: '',
    desc: '',
    price: '',
    oldPrice: '',
    shoppingCost: '',
    dateOf: '',
  } as DealInfoObj);


  return <View className={'w-full items-center pt-14'}>
    <View className={'w-11/12 items-start'}>
      <CustomInput value={deal.link} setter={(text: string) => {
      setDeal(prevState => ({
        ...prevState,
        link: text
      }));
    }} defaultValue={"Link to deal*"} customStyles={' w-full '}/>
      <SmallLabel content={"copy and paste direct link to offer"} customStyles={'text-gray ml-0'}/>
    </View>


    <View className={'w-11/12 items-start'}>
      <CustomInput value={deal.name} setter={(text: string) => {
        setDeal(prevState => ({
          ...prevState,
          name: text,
        }));
      }} defaultValue={"Name of Product*"} customStyles={' w-full '}/>
      <SmallLabel content={"copy and paste direct link to offer"} customStyles={'text-gray ml-0'}/>
    </View>


    <View className={'w-11/12 items-start'}>
      <CustomInput value={deal.companyName} setter={(text: string) => {
        setDeal(prevState => ({
          ...prevState,
          companyName: text
        }));
      }} defaultValue={"Company name*"} customStyles={' w-full '}/>
      <SmallLabel content={"copy and paste direct link to offer"} customStyles={'text-gray ml-0'}/>
    </View>

    <View className={'w-11/12 items-start'}>
      <CustomInputMultiline value={deal.desc} setter={(text: string) => {
        setDeal(prevState => ({
          ...prevState,
          desc: text
        }));
      }} defaultValue={"Description*"} customStyles={' w-full h-32 '}/>
      <SmallLabel content={"copy and paste direct link to offer"} customStyles={'text-gray ml-0'}/>
    </View>

    <View className={'w-11/12 flex flex-row items-start '}>
      <View className={'w-6/12 items-start pr-2'}>
        <CustomInput value={deal.price} setter={(text: string) => {
          setDeal(prevState => ({
            ...prevState,
            price: text
          }));
        }} defaultValue={"Price*"} customStyles={' w-full '}/>
      </View>

      <View className={'w-6/12 items-start'}>
        <CustomInput value={deal.oldPrice} setter={(text: string) => {
          setDeal(prevState => ({
            ...prevState,
            oldPrice: text
          }));
        }} defaultValue={"Old price"} customStyles={' w-full '}/>
      </View>
    </View>

    <View className={'w-11/12 flex flex-row items-start '}>
      <View className={'w-6/12 items-start pr-2'}>
        <CustomInput value={deal.shoppingCost} setter={(text: string) => {
          setDeal(prevState => ({
            ...prevState,
            shoppingCost: text
          }));
        }} defaultValue={"Delivery cost*"} customStyles={' w-full '}/>
      </View>

      <View className={'w-6/12 items-start'}>
        <CustomInput value={deal.dateOf} setter={(text: string) => {
          setDeal(prevState => ({
            ...prevState,
            dateOf: text
          }));
        }} defaultValue={"Date Off"} customStyles={' w-full '}/>
      </View>
    </View>
    <View className={'w-11/12 mt-4'}>
      <LargeLabel content={"Upload photo*"} customStyles={'text-gray '}/>
      <TouchableOpacity className={'items-center justify-center w-full h-52 rounded-xl border-gray border-4 border-dashed'}>
        <Plus/>
      </TouchableOpacity>
      <AppButton onPress={()=>console.log('sending to db: ', deal)} textContext={'ADD NEW DEAL'} customStyles={'mt-4 p-0 w-full'}></AppButton>
    </View>
  </View>
}
