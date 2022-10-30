import React, { useContext } from 'react';
import { Button } from 'react-native';
import { AuthContextProvider } from '../../index';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginPage = () => {
  const setter = useContext(AuthContextProvider);
  return (
    <SafeAreaView className={'flex-column flex-1 bg-orange'}>
      <Button
        color={'white'}
        title={'Login'}
        onPress={() =>
          setter?.login({
            login: 'user',
            password: '123',
          })
        }
      />
    </SafeAreaView>
  );
};
