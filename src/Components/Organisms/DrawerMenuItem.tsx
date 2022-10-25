import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export interface Props {
  screenName: string;
}

export function DrawerMenuItem({ screenName }: Props) {
  const navigation = useNavigation();
  return (
    <View className={'h-80 min-w-full bg-midnight'}>
      <Text
        onPress={() =>
          // @typescript-eslint/no-unsafe-member-access
          navigation.navigate(screenName as never)
        }
      >
        {screenName}
      </Text>
    </View>
  );
}
