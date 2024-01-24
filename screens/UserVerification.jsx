import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { userVerification, loadUser } from '../redux/auth/authAction'


const UserVerification = () => {

  const inputRef = useRef()

  const [otp, setOtp] = useState()

  // redux
  const dispatch = useDispatch()
  const { loading, message, error } = useSelector(state => state.auth)

  const otpVerifyHandler = async () => {
    await dispatch(userVerification(otp))
    dispatch(loadUser())
  }


  // auto focus input box
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0);
  }, [])


  // show message
  useEffect(() => {
    if (message) {
        Alert.alert(message)
        dispatch({ type: 'clearMessage' })
    }
    if (error) {
        Alert.alert(error)
        dispatch({ type: 'clearError' })
    }
}, [alert, message, error, dispatch])




  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>User Verification</Text>
        <Text style={styles.subTitle}>OTP is sent to your email</Text>
      </View>

      <View style={styles.inputs}>
        <TextInput ref={inputRef} value={otp} onChangeText={setOtp} keyboardType='number-pad' placeholder='Enter Your OTP to Verify' style={styles.input} />
      </View>

      <Button disabled={!otp} onPress={otpVerifyHandler} style={styles.loginBtn} title='Verify' />

    </View>
  )
}

export default UserVerification



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
    fontSize: 16,
    textAlign: 'center'
  },
  loginBtn: {
    backgroundColor: '#4682B4',
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  },
})