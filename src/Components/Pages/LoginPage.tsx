import React, { useContext, useState } from 'react';
import { AuthContextProvider } from '../../index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../Molecules/LoginForm';
import { AppButton } from '../Atoms/AppButton';
import { SmallNote } from '../Molecules/SmallNote';
import { PressableText } from '../Atoms/PressableText';

export const LoginPage = () => {
  const setter = useContext(AuthContextProvider);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView
      className={
        'flex-column w-screen flex-1 items-center justify-center bg-black'
      }
    >
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
        textContext={'LOGIN'}
      />
      <SmallNote
        childrenContentOn={true}
        firstPartText={"You don't have an account?"}
        firstPartTextCustomStyles={' ml-0'}
      >
        <PressableText
          onPress={() => console.log('GoTO register')}
          customTextContentStyles={' ml-2'}
        >
          CREATE NOW
        </PressableText>
      </SmallNote>
    </SafeAreaView>
  );
};
