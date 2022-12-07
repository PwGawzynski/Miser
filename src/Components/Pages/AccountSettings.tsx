import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { ScreenNameWBackArrow } from '../Molecules/ScreenNameWBackArrow';
import { UserProfilePhoto } from '../Organisms/UserProfilePhoto';
import { AppButton } from '../Atoms/AppButton';
import { UserContext } from '../../index';
import { CustomInput } from '../Atoms/CustomInput';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../config';
import { SmallNote } from '../Molecules/SmallNote';
import { PressableText } from '../Atoms/PressableText';
type Props = NativeStackScreenProps<RootStackParamList, 'AccountSettings'>;
export const AccountSettings = ({ navigation, route }: Props) => {
  const userDataProvider = useContext(UserContext);

  const [userName, setUserName] = useState('');

  return (
    <ScrollView>
      <SafeAreaView className={'min-h-screen bg-black'}>
        <ScreenNameWBackArrow
          screenName={'Account settings'}
          onPress={() => navigation.goBack()}
        ></ScreenNameWBackArrow>
        <View
          className={'min-w-max flex-1 items-center justify-start bg-black '}
        >
          <UserProfilePhoto />
          <AppButton
            onPress={() => {
              console.log('CHANGE IMAGE CLICKED');
            }}
            textContext={'CHANGE IMAGE'}
          />
          <CustomInput
            value={userName}
            setter={setUserName}
            defaultValue={userDataProvider?.userData.login ?? ''}
            customStyles={'pt-10'}
          />
          <SmallNote
            firstPartTextCustomStyles={'pt-3'}
            firstPartText={'Reset All data'}
            childrenContentOn={true}
          >
            <PressableText
              customPressableStyles={'pt-3 pl-2'}
              onPress={() => {
                void (async () => {
                  const userRef = doc(db, 'user', 'GGE7ch9o6f3wxPf7JBd2');
                  const defUser = doc(db, 'user', 'pL6F37UkxvL8Rwdj7KIc');
                  const docSNap = await getDoc(defUser);
                  if (!docSNap.exists()) return;
                  const defLogin = (docSNap.data()?.login as string) ?? '';
                  await setDoc(userRef, { login: defLogin }, { merge: true });
                  userDataProvider?.setUserData({
                    login: defLogin,
                    password: userDataProvider?.userData.password,
                  });
                })();
              }}
            >
              RESET
            </PressableText>
          </SmallNote>
          <AppButton
            onPress={() => {
              userDataProvider?.setUserData({
                login: userName,
                password: userDataProvider?.userData.password,
              });
              void (async () => {
                const userRef = doc(db, 'user', 'GGE7ch9o6f3wxPf7JBd2');
                await setDoc(userRef, { login: userName }, { merge: true });
              })();
            }}
            textContext={'SAVE'}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
