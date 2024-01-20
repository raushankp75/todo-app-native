import React from 'react'

// import routing navigator
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import screens
import { Home, Login, Register, Profile, Welcome } from './screens'
import { Footer } from './components'

const Stack = createNativeStackNavigator()


const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='welcome'>
                <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
            </Stack.Navigator>

            {/* <Footer /> */}
        </NavigationContainer>
    )
}

export default Main