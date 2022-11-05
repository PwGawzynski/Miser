import { CustomDrawer } from '../../Navigation/Drawer/CustomDrawer';
import { Home } from '../Pages/Home';
import { AccountSettings } from '../Pages/AccountSettings';
import { Filters } from '../Pages/Filters';
import { Achievements } from '../Pages/Achievements';
import { LogOut } from '../Pages/LogOut';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParamList = {
  Home: undefined;
  AccountSettings: undefined;
  Filters: undefined;
  LogOut: undefined;
  Achievements: undefined;
};

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export const DrawerMenu = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          unmountOnBlur: true,
          drawerStyle: {
            width: '100%',
            backgroundColor: '#000',
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
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Filters"
          component={Filters}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Achievements"
          component={Achievements}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="LogOut"
          component={LogOut}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
