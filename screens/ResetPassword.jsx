import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../redux/user/userAction'


const ResetPassword = ({navigation}) => {

  const inputRef = useRef()

  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  
  // redux
  const dispatch = useDispatch()
  const {loading, message, error} = useSelector((state) => state.userMessage)

  const resetPasswordHandler = async () => {
    if(newPassword !== confirmNewPassword){
      Alert.alert('Confirm password not matched')
    }else{
      await dispatch(resetPassword(otp, newPassword))
      navigation.navigate('login')
    }
  }


  // auto focus input box
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0);
  }, [])


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
        <TextInput ref={inputRef} value={otp} onChangeText={setOtp} keyboardType='number-pad' placeholder='Enter Your OTP' style={styles.input} />
        <TextInput secureTextEntry value={newPassword} onChangeText={setNewPassword} placeholder='New Password' style={styles.input} />
        <TextInput secureTextEntry value={confirmNewPassword} onChangeText={setConfirmNewPassword} placeholder='Confirm New Password' style={styles.input} />
      </View>

      <Button disabled={loading || !otp} onPress={resetPasswordHandler} style={styles.loginBtn} title='Change' />

    </View>
  )
}

export default ResetPassword



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