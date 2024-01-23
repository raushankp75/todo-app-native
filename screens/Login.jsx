import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loginbg from '../assets/loginbg.png'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/auth/authAction'


const Login = ({ navigation }) => {

  // get user info
  const { error } = useSelector(state => state.auth)

  // redux
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = () => {
    dispatch(login(email, password))
    // console.log(`${email}, Success Login`)
  }

  useEffect(() => {
    if (error) {
      Alert.alert(error)
      dispatch({ type: 'clearError' })
    }
  }, [error, dispatch, alert])




  return (
    <ScrollView>
      <Image source={Loginbg} style={styles.imageStyle} />

      <View style={styles.loginBox}>
        <View>
          <Text style={styles.title}>login here</Text>
          <Text style={styles.subTitle}>Welcome back login to add and manage your daily tasks</Text>
        </View>

        <View style={styles.inputs}>
          <View>
            <Text style={styles.inputLabels}>Email Id</Text>
            <TextInput keyboardType='email-address' value={email} onChangeText={setEmail} placeholder='ex: johndoe123@gmail.com' style={styles.input} />
          </View>

          <View>
            <Text style={styles.inputLabels}>Password</Text>
            <TextInput secureTextEntry value={password} onChangeText={setPassword} placeholder='ex: must be at least 5 characters' style={styles.input} />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('forgot/password')} style={styles.forgotPass}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button disabled={!email || !password} onPress={loginHandler} title='Login'></Button>


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

    gap: 15,
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
    gap:10
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    borderColor: '#b5b5b5',
    borderWidth: 2,
    borderRadius: 3
  },
  inputLabels: {
    color: '#555',
    fontWeight: '600',
    fontSize: 18
  },
  forgotPass: {
    alignSelf: 'flex-end'
  },
  forgotPassText: {
    color: 'blue',
    fontWeight: '800',
    fontSize: 15
  },
  registerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  registerBtnText: {
    color: '#0047AB',
    fontSize: 18,
    fontWeight:'600'
  }
})