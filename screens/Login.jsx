import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Loginbg from '../assets/loginbg.png'
import { Button } from 'react-native-paper'


const Login = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = () => {
    console.log('User Login')
  }


  return (
    <ScrollView>
      <Image source={Loginbg} style={styles.imageStyle} />

      <View style={styles.loginBox}>
        <View>
          <Text style={styles.title}>login here</Text>
          <Text style={styles.subTitle}>Welcome back login to add and manage your daily tasks</Text>
        </View>

        <View style={styles.inputs}>
          <TextInput value={email} onChangeText={setEmail} placeholder='Enter Your Email' style={styles.input} />
          <TextInput value={password} onChangeText={setPassword} placeholder='Enter Your Password' secureTextEntry style={styles.input} />
        </View>

        <Button disabled={!email || !password} onPress={loginHandler} style={styles.loginBtn}><Text style={styles.loginBtnText}>Login</Text></Button>


        <View style={styles.registerBtn}>
          <Text style={{ color: 'gray', fontSize: 16 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={styles.registerBtnText}>Register Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

export default Login



const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    flex: 1,
    // width: '100%'
    width: null
  },
  loginBox: {
    padding: 30,

    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0047AB',
    textTransform: 'capitalize'
  },
  subTitle: {
    color: 'gray'
  },
  inputs: {
    gap: 20
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b5b5b5',
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  },
  loginBtn: {
    backgroundColor: '#4682B4',
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  },
  registerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  registerBtnText: {
    color: '#0047AB',
    fontSize: 18
  }
})