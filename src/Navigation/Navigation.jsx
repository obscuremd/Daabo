
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DeviceTest from '../Screens/ProtectThisDevice/DeviceTest';
import DevicePicker from '../Screens/DevicePicker';
import Dashboard from '../Screens/Dashboard';
import ProtectAnotherDevice from '../Screens/ProtectAnotherDevice';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator initialRouteName='DevicePicker' screenOptions={{headerShown:false, contentStyle:styles.container }}>
        <Stack.Screen name="DevicePicker" component={DevicePicker} />        
        <Stack.Screen name="DeviceTest" component={DeviceTest} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProtectAnotherDevice" component={ProtectAnotherDevice} />
      </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


