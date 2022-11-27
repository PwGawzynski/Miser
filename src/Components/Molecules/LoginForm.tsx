import { View } from 'react-native';
import React from 'react';
import { CustomInput } from '../Atoms/CustomInput';


export interface Props {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginForm = ({ ...props }: Props) => {
  return (
    <View className={'w-screen items-center'}>



      <CustomInput
        customStyles={'mb-6'}
        value={props.login}
        setter={props.setLogin}
        defaultValue={'E-mail'}
      />
      <CustomInput
        value={props.password}
        setter={props.setPassword}
        defaultValue={'Password'}
      />
    </View>
  );
};
