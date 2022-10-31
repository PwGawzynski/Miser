import { TextInput, View } from 'react-native';
import React from 'react';

export interface Props {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginForm = ({ ...props }: Props) => {
  return (
    <View className={'w-screen items-center'}>
      <TextInput
        className={'w-10/12 border-b-2 border-white pb-2 text-base text-white'}
        value={props.login}
        onChangeText={props.setLogin}
      />
      <TextInput
        className={
          'mt-2 w-10/12 border-b-2 border-white pb-2 text-base text-white'
        }
        value={props.password}
        onChangeText={props.setPassword}
      />
    </View>
  );
};
