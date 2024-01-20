import { View, Text, StyleSheet, Platform, Image, ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import WelcomeImg from '../assets/welcome.jpeg'


const Welcome = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.main}>
                <Image source={WelcomeImg} style={styles.imageStyle} />

                <View style={styles.content}>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum repudiandae nesciunt possimus ducimus voluptates recusandae, amet consequuntur facilis animi deserunt, hic natus, inventore fugiat sed numquam. Esse quis non, accusamus reiciendis, facilis voluptates rerum ea debitis ratione ipsa accusantium aut?</Text>

                    <View style={styles.btns}>
                        <Button onPress={() => navigation.navigate('login')} style={styles.loginBtn}><Text style={styles.btnText}>login</Text></Button>
                        <Button onPress={() => navigation.navigate('register')} style={styles.registerBtn}><Text style={styles.btnText}>register</Text></Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Welcome



const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    content:{
        gap: 40,
        padding:40
    },
    imageStyle: {
        height: 400,
        flex: 1,
        // width: '100%'
        width: null
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginBtn: {
        backgroundColor: '#4682B4'
    },
    registerBtn: {
        backgroundColor: 'green'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: '600'
    }
})