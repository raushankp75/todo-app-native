import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const ChangePassword = () => {

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const changePasswordHandler = () => {
    if (oldPassword === newPassword) {
      Alert.alert('New Password can not be same as Old Password')
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <View style={styles.inputs}>
        <TextInput value={oldPassword} onChangeText={setOldPassword} placeholder='Enter Your Old Password' secureTextEntry style={styles.input} />
        <TextInput value={newPassword} onChangeText={setNewPassword} placeholder='Enter Your New Password' secureTextEntry style={styles.input} />
      </View>

      <Button onPress={changePasswordHandler} style={styles.loginBtn}><Text style={styles.loginBtnText}>CHANGE</Text></Button>

    </View>
  )
}

export default ChangePassword



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
})