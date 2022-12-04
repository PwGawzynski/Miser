import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Good } from '../Components/Pages/Good';
import { TheBest } from '../Components/Pages/TheBest';
import { New } from '../Components/Pages/New';

export type TabNavigatorParamList = {
  New: undefined;
  Good: undefined;
  TheBest: undefined;
};

const Tab = createMaterialTopTabNavigator<TabNavigatorParamList>();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TheBest"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 19,
          fontWeight: 'bold',
          color: '#fff',
          letterSpacing: 0.5,
          overflow: 'visible',
        },
        tabBarItemStyle: {
          overflow: 'visible',
          width: 120,
          height: 55,
        },
        tabBarStyle: {
          backgroundColor: 'black',
          overflow: 'visible',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          width: 40,
          left: 40,
          bottom: 10,
          height: 4,
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="TheBest"
        component={TheBest}
        options={{ tabBarLabel: 'The Best' }}
      />
      <Tab.Screen
        name="Good"
        component={Good}
        options={{ tabBarLabel: 'Good' }}
      />
      <Tab.Screen name="New" component={New} options={{ tabBarLabel: 'New' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  topNavi: {
    backgroundColor: '#000',
  },
});

export default function TopBarNavigator() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
}
