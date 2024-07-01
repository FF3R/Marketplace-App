import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfilScreen from '../Screens/ProfileScreen/ProfileScreen';
import Color from '../Utils/Color';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor: Color.PRIMARY}}>
        <Tab.Screen name='home' component={HomeScreen}
        options={{
          tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>),
          tabBarIcon:({color,size})=>(
            <FontAwesome name="home" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='booking' component={BookingScreen}options={{
          tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>),
          tabBarIcon:({color,size})=>(
            <FontAwesome name="bookmark" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='profile' component={ProfilScreen}options={{
          tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>),
          tabBarIcon:({color,size})=>(
            <FontAwesome name="user" size={size} color={color} />
          )
        }}/>
    </Tab.Navigator>
  )
}