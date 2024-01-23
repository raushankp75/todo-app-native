import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getAllTasks, getSingleTask, updateTask, updateTaskStatus } from '../redux/task/taskAction'
import { serverUrl } from '../redux/serverUrl'
import axios from 'axios'

import moment from 'moment';


const UpdateTask = ({ route, navigation }) => {

    // console.log(route.params.id)
    const taskId = route.params.id

    // redux 
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")


    // get single task data
    const getSingleTask = async () => {
        try {
            const { data } = await axios.get(`${serverUrl}/task/${taskId}`)
            // console.log(data)
            setTitle(data.title)
            setDescription(data.description)
            setDate(data.createdAt)
        } catch (error) {
            Alert.alert(error)
        }
    }
    useEffect(() => {
        getSingleTask()
    }, [])


    // update task
    const updateTaskHandler = () => {
        // console.log(`Title: ${title}, Description: ${description}`)
        dispatch(updateTask(title, description, taskId))
        dispatch(getAllTasks())
        navigation.navigate('home')
    }


    // delete task
    const handleDelete = async () => {
        if (taskId) {
            await dispatch(deleteTask(taskId))
        }
        dispatch(getAllTasks())
        navigation.navigate('home')
    }


    // time ago features
    const dateTimeAgo = moment.utc(date).local().startOf('sec').fromNow()
    // const dateTimeAgo = moment(new Date(createdAt)).fromNow();



    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.heading}>
                    <Text style={styles.headingTitle}>Update Your Task</Text>
                    <Icon onPress={handleDelete} name='delete' color='#D22B2B' size={25} />
                </View>

                {/* <Text style={styles.content}> */}
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.inputLabels}>This Is Your Task Title</Text>
                            <TextInput value={title} onChangeText={setTitle} style={styles.input} />
                        </View>

                        <View>
                            <Text style={styles.inputLabels}>This Is Your Task Description</Text>
                            <TextInput multiline value={description} onChangeText={setDescription} style={[styles.input, styles.multilineText]} />
                        </View>

                        <Text style={styles.timeTxt}>{dateTimeAgo}</Text>
                    </View>
                {/* </Text> */}
            </SafeAreaView>
            <TouchableOpacity onPress={updateTaskHandler} disabled={!title || !description} style={styles.updateIcon}>
                <Icon name='check' size={32} color='#4682B4' />
            </TouchableOpacity>
        </View>
    )
}

export default UpdateTask



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4682B4',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingBottom: 60,
    },
    heading: {
        backgroundColor: "#0047AB",
        elevation: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 22,
        paddingRight: 22,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingTitle: {
        color: '#fff',
        fontSize: 22
    },
    // content: {
    //     // width: '80%',
    //     padding: 20
    // },
    inputs: {
        padding:20,
        gap: 20
    },
    input: {
        backgroundColor: '#4682B4',
        padding: 10,
        fontSize: 18,
        color: '#D3D3D3',
        borderColor: '#b5b5b5',
        borderBottomWidth: 2
    },
    multilineText:{
        minHeight:65,
        textAlignVertical:'top'
    },
    inputLabels: {
        color: '#B6D0E2',
        fontWeight: '600',
        fontSize: 18
    },
    timeTxt: {
        color: '#C0C0C0',
        fontSize: 12,
        alignSelf:'flex-end'
    },
    updateIcon: {
        backgroundColor: '#fff',
        elevation: 20,
        width: '150',
        height: '150',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 100,
        alignSelf: 'flex-end',
        padding: 15,
        marginRight: 15,

        position: 'absolute',
        right: 10,
        bottom: 30,
    },
})