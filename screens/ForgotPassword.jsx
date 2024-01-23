import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../redux/user/userAction'

const ForgotPassword = ({navigation}) => {

  const inputRef = useRef()

  const [email, setEmail] = useState("")

  // redux
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.userMessage)

  const forgotPasswordHandler = async () => {
    await dispatch(forgotPassword(email))
    navigation.navigate('reset/password')
  }


  // auto focus input box
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0);
  }, [])




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.inputs}>
        <TextInput ref={inputRef} value={email} onChangeText={setEmail} placeholder='Your Email Id' style={styles.input} />
      </View>

      <Button disabled={loading || !email} loading={loading} onPress={forgotPasswordHandler} style={styles.loginBtn} title='Send OTP' />
    </View>
  )
}

export default ForgotPassword




const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 20,
    flex: 1,
    justifyContent: 'center',
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
    borderBottomWidth: 1,
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
  txt:{
    
  }
})