import React, { useContext, useState } from 'react';
import { AuthContextProvider, AuthRootStackParamList } from '../../index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../Molecules/LoginForm';
import { AppButton } from '../Atoms/AppButton';
import { SmallNote } from '../Molecules/SmallNote';
import { PressableText } from '../Atoms/PressableText';
import { Logo } from '../Atoms/Logo';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<AuthRootStackParamList, 'LoginPage'>;

export const LoginPage = ({ navigation }: Props) => {
  const setter = useContext(AuthContextProvider);
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
        onPress={() =>
          setter?.login({
            login,
            password,
          })
        }
        textContext={'LOG IN'}
      />
      <SmallNote
        childrenContentOn={true}
        firstPartText={"You don't have an account?"}
        firstPartTextCustomStyles={' ml-0'}
      >
        <PressableText
          onPress={() => navigation.navigate('RegisterPage')}
          customTextContentStyles={' ml-2'}
        >
          CREATE NOW
        </PressableText>
      </SmallNote>
    </SafeAreaView>
  );
};
