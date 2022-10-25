import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../index';
type Props = NativeStackScreenProps<RootStackParamList, 'AccountSettings'>;
export const AccountSettings = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Witam w innym domu kurwa.</Text>
      <Button
        title="Go to The Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
