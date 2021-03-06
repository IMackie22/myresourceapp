import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainStackNavigator, ContactStackNavigator, CryptoStackNavigator, HomeStackNavigator } from './StackNavigator';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Text, View, StyleSheet, Platform} from 'react-native';
import Icon from "react-native-ionicons";
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';




const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
      screenOptions={({route}) => ({

          tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName='home';
                  size = focused ? 22 : 25;
                  color= focused ? '#008E89' : '#FFD32D';
              } else if (route.name === 'Services'){
                  iconName='support';
                  size = focused ? 22 : 25;
                  color= focused ? '#008E89' : '#FFD32D';
              } else if (route.name === 'Crypto'){
                iconName='bitcoin';
                size = focused ? 22 : 25;
                color= focused ? '#008E89' : '#FFD32D';
            } else if (route.name === 'Contact Us'){
                iconName='paper-plane';
                size = focused ? 22 : 25;
                color= focused ? '#008E89' : '#FFD32D';

            }
            return(
                <FontAwesome
                name={iconName}
                size={size}
                color={color}
                />
            )
          }
      })}
      tabBarOptions={{
          showIcon: true,
          labelStyle: { fontSize: 16},
          showLabel: true
      }}
      activeColor='#f0edf6'
      inactiveColor='#008E89'
      barStyle={{backgroundColor:'#085E8D'}}
      >
        <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        />
        <Tab.Screen
        name="Services"
        component={MainStackNavigator}
        />
        <Tab.Screen
        name="Crypto"
        component={CryptoStackNavigator}
        />
        <Tab.Screen
        name="Contact Us"
        component={ContactStackNavigator}
        // options={{
        //     tabBarIcon: () => <Icon name="comment-alt" size={25} color="#008E89" />
        //   }}
        //
        />

      </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    Text: {
        fontFamily: "Anton_400Regular",
    }
});

export default BottomTabNavigator;
