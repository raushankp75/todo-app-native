import { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from 'expo-image-picker'


const MyCamera = ({ navigation, route }) => {

    // console.log(route.params.updateProfile)

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })();
    }, [])

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    // Photo picker
    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return;
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true, aspect: [1, 1], quality: 1
        })

        // console.log(data.assets[0].uri)

        // conditionallly navigate after choose pic
        if (route.params.updateProfile) {
            return navigation.navigate('profile', { image: data.assets[0].uri })
        } else {
            return navigation.navigate('register', { image: data.assets[0].uri })
        }
    }

    // Click photo
    const clickPicture = async () => {
        const data = await camera.takePictureAsync()
        // console.log(data.uri)

        // conditionallly navigate after click pic
        if (route.params.updateProfile) {
            return navigation.navigate('profile', { image: data.uri })
        } else {
            return navigation.navigate('register', { image: data.uri })
        }
    }

    // Flip camera
    const toggleCameraType = () => {
        setType(type === CameraType.back ? CameraType.front : CameraType.back);
    }



    return (
        <View style={{ flex: 1 }}>
            <Camera type={type} style={styles.camera} ratio='1:1' ref={(e) => setCamera(e)}>
                {/* <View>
                    <TouchableOpacity onPress={toggleCameraType}>
                        <Text>Flip Camera</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.btnContainer}>
                    <Icon onPress={openImagePickerAsync} name='image' size={40} color='#fff' />
                    <Icon onPress={clickPicture} name='camera' size={40} color='#fff' />
                    <Icon onPress={toggleCameraType} name='flip-camera-android' size={40} color='#fff' />
                </View>
            </Camera>
        </View>
    )
}

export default MyCamera



const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 10
    },
    camera: {
        flex: 1,
    }
})