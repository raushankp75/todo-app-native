import React from 'react'

// import routing navigator
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// import screens
import { Home, Login } from './screens'

const Stack = createNativeStackNavigator()


const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='login' component={Login} options={{headerShown: false}} />
    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default Main