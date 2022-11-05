import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { TopBar } from '../Organisms/TopBar';
import TopBarNavigator from '../../Navigation/TabBarNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export const Home = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView className={'min-h-screen bg-black'}>
      <View style={styles.container}>
        <TopBar navigation={navigation} route={route} />
        <TopBarNavigator/>
      </View>
      
      
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})