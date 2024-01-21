import React from 'react'

// import routing navigator
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import screens
import { Home, Login, Register, Profile, Welcome, MyCamera, ChangePassword, } from './screens'
import { Footer, Loader } from './components'

import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()


const Main = () => {

    const { loading, isAuthenticated } = useSelector(state => state.auth)

    return (
        loading ?
            <Loader />
            :
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isAuthenticated ? 'home' : 'welcome'}>
                    <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
                    <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name='mycamera' component={MyCamera} options={{ headerShown: false }} />
                    <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name='change/password' component={ChangePassword} options={{ headerShown: false }} />
                </Stack.Navigator>

                {isAuthenticated && <Footer />}
            </NavigationContainer>
    )
}

export default Main