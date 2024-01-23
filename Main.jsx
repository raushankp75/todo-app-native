import React, { useEffect } from 'react'

// import routing navigator
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import screens
import { Home, Login, Register, Profile, Welcome, MyCamera, ChangePassword, UpdateTask, UserVerification, ForgotPassword, ResetPassword, } from './screens'
import { Footer, Loader } from './components'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/auth/authAction'

const Stack = createNativeStackNavigator()


const Main = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const { loading, isAuthenticated } = useSelector(state => state.auth)

    return (
        loading ?
            <Loader />
            :
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isAuthenticated ? 'home' : 'login'}>
                    <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name='taskupdate' component={UpdateTask} options={{ headerShown: false }} />
                    <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name='user/verify' component={UserVerification} options={{ headerShown: false }} />
                    <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name='mycamera' component={MyCamera} options={{ headerShown: false }} />
                    <Stack.Screen name='change/password' component={ChangePassword} options={{ headerShown: false }} />
                    <Stack.Screen name='forgot/password' component={ForgotPassword} options={{ headerShown: false }} />
                    <Stack.Screen name='reset/password' component={ResetPassword} options={{ headerShown: false }} />
                </Stack.Navigator>

                {isAuthenticated && <Footer />}
            </NavigationContainer>
    )
}

export default Main