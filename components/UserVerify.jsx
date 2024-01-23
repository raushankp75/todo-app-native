import { View, Text, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'


const UserVerify = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flexDirection: 'column', padding:20}}>
            <Text style={{color:'red', fontWeight:'800', textAlign:'center'}}>Please verify your account otherwise your account is delete within few minutes and you have to register again.</Text>
            <Button onPress={() => navigation.navigate('user/verify')}  title="Verify"></Button>
        </View>
    )
}

export default UserVerify