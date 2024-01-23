import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Registerbg from '../assets/registerbg.jpg'
import { Avatar } from 'react-native-paper'

import { useDispatch } from 'react-redux'
import { register } from '../redux/auth/authAction'

import mime from 'mime'


const Register = ({ navigation, route }) => {

  
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  // redux
  const dispatch = useDispatch()
  
  const handleImage = () => {
    // navigation.navigate('mycamera')
    navigation.navigate('mycamera', { registerUser: true })
  }

  // get image from params after select image
  useEffect(() => {
    // console.log(route.params.image)

    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image)
      }
    }
  }, [route])



  const registerHandler = async () => {
    if(password !== confirmPassword){
      Alert.alert('Both password not matched!')
    }
    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('email', email)
    myForm.append('password', password)
    myForm.append('avatar', {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop()
    })

    await dispatch(register(myForm))
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
          <Text style={styles.photoText}>Select a Photo</Text>
        </TouchableOpacity>

        <View style={styles.inputs}>
          <TextInput value={name} onChangeText={setName} placeholder='Full Name ex: John Doe' style={styles.input} />
          <TextInput keyboardType='email-address' value={email} onChangeText={setEmail} placeholder='Email Id ex: johndoe123@gmail.com' style={styles.input} />
          <TextInput secureTextEntry value={password} onChangeText={setPassword} placeholder='Password ex: johXX52XX' style={styles.input} />
          <TextInput secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} placeholder='Confirm Password ex: johXX52XX' style={styles.input} />
        </View>

        <Button disabled={!email || !password} onPress={registerHandler} color='green' title='Signup'></Button>


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
    // flex: 1,
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
  changePhoto: {
    alignItems: 'center'
  },
  photoText: {
    fontSize: 18,
    fontWeight:'600',
    color:'blue'
  },
  inputs: {
    gap: 10
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 17,
    borderColor: '#b5b5b5',
    borderWidth: 2,
    borderRadius: 3
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  loginBtnText: {
    color: '#0047AB',
    fontSize: 18,
    fontWeight:'600'
  }
})