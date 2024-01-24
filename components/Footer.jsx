import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'


const Footer = () => {
    const navigation = useNavigation()


    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Icon name='home' size={30} color='#D3D3D3' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                <Icon name='user' size={30} color='#D3D3D3' />
            </TouchableOpacity>
        </View>
    )
}

export default Footer



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#0047AB',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 8,
        paddingBottom: 8
    }
})