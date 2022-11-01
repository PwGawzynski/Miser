import { Logo } from '../Atoms/Logo';
import { Text } from 'react-native';
import { LoginForm } from '../Molecules/LoginForm';
import { AppButton } from '../Atoms/AppButton';
import { SmallNote } from '../Molecules/SmallNote';
import { PressableText } from '../Atoms/PressableText';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useContext, useState } from 'react';
import { AccountSetter, AuthRootStackParamList } from '../../index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<AuthRootStackParamList, 'RegisterPage'>;

export const RegisterAccount = ({ navigation }: Props) => {
  const newAccountSetter = useContext(AccountSetter);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      className={
        'flex-column w-screen flex-1 items-center justify-center bg-black'
      }
    >
      <Logo>
        <Text className={'text-xl text-white'}>LOG IN</Text>
      </Logo>
      <LoginForm
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
      />
      <AppButton
        onPress={() => {
          console.log(newAccountSetter);
          newAccountSetter?.save({
            login,
            password,
          });
          console.log(login);
          navigation.navigate('LoginPage');
        }}
        textContext={'CREATE ACCOUNT'}
      />
      <SmallNote
        childrenContentOn={true}
        firstPartText={'Do you have an account?'}
        firstPartTextCustomStyles={' ml-0'}
      >
        <PressableText
          onPress={() => navigation.navigate('LoginPage')}
          customTextContentStyles={' ml-2'}
        >
          LOG IN
        </PressableText>
      </SmallNote>
    </SafeAreaView>
  );
};
