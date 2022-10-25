import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Components/Pages/Home';
import { AccountSettings } from './Components/Pages/AccountSettings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { CustomDrawer } from './Navigation/Drawer/CustomDrawer';
import { Filters } from './Components/Pages/Filters';
import { AboutDeals } from './Components/Pages/AboutDeals';

export type RootStackParamList = {
  Home: undefined;
  AccountSettings: undefined;
  Filters: undefined;
  AboutDeals: undefined;
};

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          unmountOnBlur: true,
          drawerStyle: {
            width: '100%',
          },
          drawerItemStyle: {
            width: '100%',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="AccountSettings"
          component={AccountSettings}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Filters"
          component={Filters}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="AboutDeals"
          component={AboutDeals}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
