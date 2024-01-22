import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, StatusBar, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../redux/auth/authAction'
import { updateProfile } from '../redux/user/userAction'

import mime from 'mime'
import { Loader } from '../components'


const Profile = ({ navigation, route }) => {

  // redux
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { loading, message, error } = useSelector(state => state.userMessage)

  const [avatar, setAvatar] = useState(user?.avatar?.url)
  const [name, setName] = useState(user?.name)
  // const [show, setShow] = useState(false)


  const handleImage = () => {
    navigation.navigate('mycamera', { updateProfile: true })
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



  const submitHandler = () => {
    // console.log(`avatar ${avatar}, name ${name}`)

    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('avatar', {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop()
    })

    dispatch(updateProfile(myForm))

    // setName("")
    // setShow(!show)
  }

  const logoutHandler = () => {
    dispatch(logout())
  }


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
    loading ?
      <Loader />
      :
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={logoutHandler} style={styles.logoutBtn}>
            <Text style={styles.logoutBtnText}>Logout</Text>
          </TouchableOpacity>

          <View style={styles.content}>
            <TouchableOpacity onPress={handleImage} style={styles.changePhoto}>
              <Avatar.Image source={{ uri: avatar ? avatar : null }} size={200}></Avatar.Image>
              <Text style={styles.photoText}>Change Photo</Text>
            </TouchableOpacity>

            {/* <View style={styles.inputs}>
            {!show ? (
              <>
                <Text style={styles.nameText}>{name}</Text>
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Button style={styles.btn}><Text style={styles.btnText}>edit</Text></Button>
                </TouchableOpacity>
              </>

            ) : (
              <>
                <TextInput value={name} onChangeText={setName} placeholder='Enter Your Name' style={styles.input} />
                <Button onPress={submitHandler} style={styles.btn}><Text style={styles.btnText}>update</Text></Button>
              </>
            )}
          </View> */}

            <View style={styles.inputs}>
              <TextInput value={name} onChangeText={setName} placeholder='Enter Your Name' style={styles.input} />
              <Button onPress={submitHandler} style={styles.btn}><Text style={styles.btnText}>update</Text></Button>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('change/password')} style={styles.changePassBtn}>
              <Text style={styles.changePassBtnText}>change password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  )
}

export default Profile



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    gap: 60
  },
  logoutBtn: {
    backgroundColor: '#D22B2B',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 30
  },
  logoutBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  changePhoto: {
    alignItems: 'center'
  },
  photoText: {
    fontSize: 25
  },
  inputs: {
    width: '90%',
    // gap: 20,
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    gap: 10,
    // margin: 10
  },
  nameText: {
    fontSize: 22
  },
  input: {
    width: '70%',
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#b5b5b5',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#4682B4',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'capitalize'
  },
  changePassBtn: {
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 10,
  },
  changePassBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    textTransform: 'uppercase'
  },
})