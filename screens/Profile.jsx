import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, StatusBar, ScrollView, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar } from 'react-native-paper'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../redux/auth/authAction'
import { updateAvatar, updateProfile } from '../redux/user/userAction'

import Icon from 'react-native-vector-icons/FontAwesome5'

import mime from 'mime'
import { Loader, UserVerify } from '../components'


const Profile = ({ navigation, route }) => {

  // redux
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { loading, message, error } = useSelector(state => state.userMessage)

  const [avatar, setAvatar] = useState(user?.avatar?.url)
  const [name, setName] = useState(user?.name)
  const [show, setShow] = useState(false)


  const handleImage = () => {
    navigation.navigate('mycamera', { updateProfile: true })
  }

  // get image from params after select image
  useEffect(() => {
    // console.log(route.params.image)

    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image)
        if (avatar) {
          // form data
          const myForm = new FormData()
          myForm.append('avatar', {
            uri: avatar,
            type: mime.getType(avatar),
            name: avatar.split("/").pop()
          })

          dispatch(updateAvatar(myForm))
        }
      }
    }
  }, [route])



  const submitHandler = () => {
    dispatch(updateProfile(name))

    setShow(!show)
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
    <>
      {
        loading ?
          <Loader />
          :
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('change/password')}>
                  <Text style={styles.changePassBtnText}>change password</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={logoutHandler} style={styles.logoutBtn}>
                  <Text style={styles.logoutBtnText}>Logout</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.content}>
                {user.verified ? null : (<UserVerify />)}

                <View style={styles.changePhoto} >
                  <Avatar.Image source={{ uri: avatar ? avatar : null }} size={240} style={{elevation:50}}></Avatar.Image>
                  <TouchableOpacity onPress={handleImage} style={{padding:5}}>
                    <Icon name='user-edit' color='#6082B6' style={styles.photoText} />
                  </TouchableOpacity>
                </View>

                <View style={styles.inputs}>
                  {!show ? (
                    <>
                      <Text style={styles.nameText}>{name}</Text>
                      <TouchableOpacity onPress={() => setShow(!show)} style={styles.editBtn}>
                        <Text style={styles.btnText}>edit</Text>
                      </TouchableOpacity>
                    </>

                  ) : (
                    <>
                      <TextInput multiline value={name} onChangeText={setName} placeholder='Enter Your Name' style={styles.input} />
                      <Button onPress={submitHandler} style={styles.btn} title='Update'></Button>
                    </>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
      }
    </>
  )
}

export default Profile



const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    gap: 30,
    padding: 20
    // paddingBottom: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  logoutBtn: {
    backgroundColor: '#CC5500',
    paddingVertical:5,
    paddingHorizontal:12,
    borderRadius: 5,
  },
  logoutBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  content: {
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: 40
  },

  changePhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  photoText: {
    fontSize: 35,
    position: 'absolute',
    bottom:43,
    left:73
  },
  inputs: {
    width: '100%',
    // gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 10,
    // margin: 10
  },
  nameText: {
    fontSize: 22,
    width: '80%',
    flexWrap: 'wrap'
  },
  input: {
    // width: '70%',
    // backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b5b5b5',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
    fontSize: 16,
    marginRight: 5,
    maxHeight: 50,
    flex: 1
  },
  editBtn: {
    backgroundColor: '#50C878',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'capitalize'
  },
  changePassBtnText: {
    color: 'blue',
    fontWeight: '800',
    fontSize: 16,
    textTransform: 'uppercase'
  },
})