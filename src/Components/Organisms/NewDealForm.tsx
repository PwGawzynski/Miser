import { Image, TouchableOpacity, View } from 'react-native';
import { CustomInput } from '../Atoms/CustomInput';
import React, { useEffect, useState } from 'react';
import { DealInfoObj } from '../Pages/AddNew';
import { SmallLabel } from '../Atoms/SmallLabel';
import { CustomInputMultiline } from '../Atoms/CustomInputMultiline';
import { LargeLabel } from '../Atoms/LargeLabel';
import Plus from '../../assets/plus.svg';
import { AppButton } from '../Atoms/AppButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './DrawerMenu';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../config';

type Props = NativeStackScreenProps<RootStackParamList, 'AddNew'>;

export const NewDealForm = ({ navigation, route }: Props) => {
  const imgUri = route.params?.imgUri;

  const [deal, setDeal] = useState({
    link: '',
    name: '',
    companyName: '',
    desc: '',
    price: '',
    oldPrice: '',
    shoppingCost: '',
    dateOf: '',
  } as DealInfoObj);

  return (
    <View className={'w-full items-center pt-10'}>
      <View className={'w-11/12 items-start pb-7'}>
        <CustomInput
          value={deal.link}
          setter={(text: string) => {
            setDeal((prevState) => ({
              ...prevState,
              link: text,
            }));
          }}
          defaultValue={'Link to deal*'}
          customStyles={' w-full '}
        />
        <SmallLabel
          content={'copy and paste direct link to offer'}
          customStyles={'text-gray ml-0'}
        />
      </View>

      <View className={'w-11/12 items-start pb-7'}>
        <CustomInput
          value={deal.name}
          setter={(text: string) => {
            setDeal((prevState) => ({
              ...prevState,
              name: text,
            }));
          }}
          defaultValue={'Name of Product*'}
          customStyles={' w-full '}
        />
        <SmallLabel
          content={'Max 30 Min 3 letters'}
          customStyles={'text-gray ml-0'}
        />
      </View>

      <View className={'w-11/12 items-start'}>
        <CustomInput
          value={deal.companyName}
          setter={(text: string) => {
            setDeal((prevState) => ({
              ...prevState,
              companyName: text,
            }));
          }}
          defaultValue={'Company name*'}
          customStyles={' w-full '}
        />
        <SmallLabel
          content={'Max 30 Min 3 characters'}
          customStyles={'text-gray ml-0'}
        />
      </View>

      <View className={'w-11/12 items-start pb-7'}>
        <CustomInputMultiline
          value={deal.desc}
          setter={(text: string) => {
            setDeal((prevState) => ({
              ...prevState,
              desc: text,
            }));
          }}
          defaultValue={'Description*'}
          customStyles={' w-full h-40 '}
        />
        <SmallLabel
          content={'Max 250 Min 15 characters'}
          customStyles={'text-gray ml-0'}
        />
      </View>

      <View className={'flex w-11/12 flex-row items-start '}>
        <View className={'w-6/12 items-start pr-2 pb-5'}>
          <CustomInput
            value={deal.price}
            setter={(text: string) => {
              setDeal((prevState) => ({
                ...prevState,
                price: text,
              }));
            }}
            defaultValue={'Price*'}
            customStyles={' w-full '}
          />
        </View>

        <View className={'w-6/12 items-start'}>
          <CustomInput
            value={deal.oldPrice}
            setter={(text: string) => {
              setDeal((prevState) => ({
                ...prevState,
                oldPrice: text,
              }));
            }}
            defaultValue={'Old price'}
            customStyles={' w-full '}
          />
        </View>
      </View>

      <View className={'flex w-11/12 flex-row items-start '}>
        <View className={'w-6/12 items-start pr-2'}>
          <CustomInput
            value={deal.shoppingCost}
            setter={(text: string) => {
              setDeal((prevState) => ({
                ...prevState,
                shoppingCost: text,
              }));
            }}
            defaultValue={'Delivery cost*'}
            customStyles={' w-full '}
          />
        </View>

        <View className={'w-6/12 items-start pb-4'}>
          <CustomInput
            value={deal.dateOf}
            setter={(text: string) => {
              setDeal((prevState) => ({
                ...prevState,
                dateOf: text,
              }));
            }}
            defaultValue={'Date Off'}
            customStyles={' w-full '}
          />
        </View>
      </View>
      <View className={'mt-4 w-11/12'}>
        <LargeLabel content={'Upload photo*'} customStyles={'text-gray pb-3'} />
        <TouchableOpacity
          onPress={() => navigation.navigate('CameraPg')}
          className={
            'h-52 w-full items-center justify-center rounded-xl border-4 border-dashed border-gray'
          }
        >
          {imgUri ? (
            <Image
              source={{
                uri: imgUri,
              }}
              className={'h-full w-full'}
            />
          ) : (
            <Plus />
          )}
        </TouchableOpacity>
        <AppButton
          onPress={() => {
            void (async () => {
              const userRef = doc(db, 'Deals', 'BGe4Hnku1T6e9nI8OFjt');
              await setDoc(userRef, deal, { merge: false });
              navigation.navigate('Home');
            })();
          }}
          textContext={'ADD NEW DEAL'}
          customStyles={'mt-4 p-0 mb-8 w-full'}
        ></AppButton>
      </View>
    </View>
  );
};
