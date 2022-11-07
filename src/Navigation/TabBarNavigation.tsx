import React from 'react';
import {Text, View, Button, Animated, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { Good } from '../Components/Pages/Good';
import { TheBest } from '../Components/Pages/TheBest';
import { New } from '../Components/Pages/New';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
            initialRouteName='TheBest'
            screenOptions={{
                tabBarLabelStyle: {fontSize: 20, fontWeight: 'bold', color: '#fff'},
                tabBarItemStyle: {width: 120},
                tabBarStyle: {backgroundColor: 'black'},
                tabBarIndicatorStyle: {backgroundColor: '#fff', width: 40, left: 40, bottom: 10, height: 4}
            }}
            >
                <Tab.Screen 
                    name="TheBest"
                    component={TheBest}
                    options={{tabBarLabel: 'The Best'}}
                />
                <Tab.Screen
                    name="Good"
                    component={Good}
                    options={{tabBarLabel: 'Good'}}
                />
                <Tab.Screen
                    name="New"
                    component={New}
                    options={{tabBarLabel: 'New'}}
                />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
topNavi: {
    backgroundColor: '#000',
    },
}) 

export default function TopBarNavigator() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs></MyTabs>
        </NavigationContainer>
    )
}