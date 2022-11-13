import React, { useEffect, useRef, useState } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from "expo-camera";
import *  as MediaLibrary from 'expo-media-library';
import { Image, Text, View } from "react-native";
import { AppButton } from "../Atoms/AppButton";

type Props = NativeStackScreenProps<RootStackParamList, 'CameraPg'>;




export const CameraPg = ({navigation,route }: Props) => {
  let  cameraRef = useRef() as any;
  const [hasCameraPer, setCameraPer]= useState(false);
  const [hasMediaPer, setMediaPer]= useState(false);
  const [photo, setPhoto] = useState() as any;

  useEffect(()=> {
    (async ()=>{
      const cameraPer =  await Camera.requestCameraPermissionsAsync();
      const mediaLibPer = await MediaLibrary.requestPermissionsAsync();
      setCameraPer(cameraPer.status === 'granted');
      setMediaPer(mediaLibPer.status==='granted');

    })();
  },[])

  if(hasCameraPer === undefined){
    return (<View className={'flex-1 items-center justify-center'}>
      <Text>Requesting permission</Text>
    </View>)
  }else if (!hasCameraPer){
    return (<View className={'flex-1 items-center justify-center'}>
      <Text>Enable camera!!</Text>
    </View>)
  }

  const takePicture = async ()=>{
    let options = {
      quality: 1,
      base64: true,
      ratio: [4,3],
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }

  if (photo){
    let savePhoto = async ()=>{
      console.log(photo.uri);
      MediaLibrary.createAssetAsync(photo.uri).then(async (data)=>{
        setPhoto(undefined);
        const uri = data.uri
        await MediaLibrary.getAlbumAsync('Miser').then((album)=>{
          if(data) {
            MediaLibrary.addAssetsToAlbumAsync(data,album).then((status)=>{
              if (status) navigation.navigate('AddNew', {imgUri: uri});
              else navigation.navigate('AddNew');

            });
          }
          else {
            MediaLibrary.createAlbumAsync('Miser', data).then(data=> {
              navigation.navigate('AddNew', {imgUri: uri});
            });
          }
        })

      })
    }
    return <SafeAreaView className={'w-screen h-screen items-center justify-center'}>
      <Image source={{ uri: `data:image/jpg;base64, ${photo.base64}` }} className={'w-screen h-screen'}/>
      <View className={' flex-1 w-full h-full  items-center justify-center z-10 absolute'}>
        <AppButton onPress={savePhoto} textContext={"SAVE"} customStyles={'m-10'}/>
        <AppButton onPress={()=> setPhoto(undefined)} textContext={"DISCARD"} customStyles={'m-0'}/>
      </View>
    </SafeAreaView>
  }


  return (
    <SafeAreaView
      className={'h-screen w-screen items-center justify-start bg-black p-0'}
    >
    <Camera ref={cameraRef} className={'w-screen h-screen items-center justify-end'}>
      <AppButton onPress={takePicture} textContext={"TAKE PICTURE"} customStyles={'mb-52'}/>
    </Camera>
    </SafeAreaView>
  );
};
