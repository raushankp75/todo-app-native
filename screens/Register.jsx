import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Registerbg from '../assets/registerbg.jpg'
import { Avatar, Button } from 'react-native-paper'
import LocalAvatar from '../assets/localAvatar.png'


const Register = ({ navigation }) => {

  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleImage = () => {
    console.log('Image here')
  }

  const registerHandler = () => {
    console.log('user register')
  }
  


  return (
    <ScrollView>
      <Image source={Registerbg} style={styles.imageStyle} />

      <View style={styles.registerBox}>
        <View>
          <Text style={styles.title}>create account</Text>
          <Text style={styles.subTitle}>Create an acount so you can explore all the features</Text>
        </View>

        <TouchableOpacity onPress={handleImage} style={styles.changePhoto}>
          <Avatar.Image source={{ uri: avatar ? avatar : null }} size={100}></Avatar.Image>
          <Text>Change Photo</Text>
        </TouchableOpacity>

        <View style={styles.inputs}>
          <TextInput value={name} onChangeText={setName} placeholder='Enter Your Name' style={styles.input} />
          <TextInput value={email} onChangeText={setEmail} placeholder='Enter Your Email' style={styles.input} />
          <TextInput value={password} onChangeText={setPassword} placeholder='Enter Your Password' secureTextEntry style={styles.input} />
        </View>

        <Button disabled={!email || !password} onPress={registerHandler} style={styles.registerBtn}><Text style={styles.registerBtnText}>Register</Text></Button>


        <View style={styles.loginBtn}>
          <Text style={{ color: 'gray', fontSize: 16 }}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

export default Register




const styles = StyleSheet.create({
  imageStyle: {
    height: 230,
    flex: 1,
    // width: '100%'
    width: null
  },
  registerBox: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    gap: 10,
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
  changePhoto:{
    alignItems:'center'
  },
  inputs: {
    gap: 10
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b5b5b5',
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  },
  registerBtn: {
    backgroundColor: '#4682B4',
  },
  registerBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  loginBtnText: {
    color: '#0047AB',
    fontSize: 18
  }
})