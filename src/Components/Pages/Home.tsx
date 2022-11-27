import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../Organisms/DrawerMenu';
import { TopBar } from '../Organisms/TopBar';
import TopBarNavigator from '../../Navigation/TabBarNavigation';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../config";
import { UserContext } from "../../index";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export const Home = ({ navigation, route }: Props) => {
  const userDataProvider = useContext(UserContext);

  useEffect(()=>{
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
  }, [])
  return (
    <SafeAreaView className={'min-h-screen bg-black'}>
      <View style={styles.container}>
        <TopBar navigation={navigation} route={route} />
        <TopBarNavigator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
