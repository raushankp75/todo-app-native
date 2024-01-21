import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

// import components
import { Task } from '../components'

import Icon from 'react-native-vector-icons/Entypo'
import { Dialog, Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, getAllTasks } from '../redux/task/taskAction'


const Home = () => {


    // redux
    const {tasks} = useSelector(state=> state.tasks)

    const dispatch = useDispatch()
    const {loading, message, error} = useSelector(state=> state.taskMessage)

    const [openDialog, setOpenDialog] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const toggleDialog = () => {
        setOpenDialog(!openDialog)
    }
  
    const addTaskHandler = () => {
        // console.log(`Title: ${title}, Description: ${description}`)
        dispatch(addTask(title, description))

        setTitle("")
        setDescription("")
        setOpenDialog(!openDialog)
    }

    useEffect(() => {
        dispatch(getAllTasks())
    }, [title, description])

    useEffect(() => {
        if(message){
            Alert.alert(message)
            dispatch({type: 'clearMessage'})
        }
        if(error){
            Alert.alert(error)
            dispatch({type: 'clearError'})
        }
    }, [alert, message, error, dispatch])



    return (
        <>
            <View style={styles.main}>
                <SafeAreaView>
                    <Text style={styles.heading}>All Task</Text>

                    <ScrollView>
                        {tasks && tasks.map((task) => (
                            <Task key={task._id} taskId={task._id} title={task.title} description={task.description} status={task.completed} />
                        ))}
                    </ScrollView>

                    <TouchableOpacity onPress={toggleDialog} style={styles.addIcon}>
                        <Icon name='add-to-list' size={32} color='#4682B4' />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>

            <Dialog visible={openDialog} onDismiss={toggleDialog}>
                <Dialog.Title>New Task</Dialog.Title>

                <Dialog.Content style={{ gap: 20 }}>
                    <TextInput name='title' value={title} onChangeText={setTitle} style={styles.input} placeholder='Task Title' />
                    <TextInput name='description' value={description} onChangeText={setDescription} style={styles.input} placeholder='Task Content' />

                    <View style={styles.dialogFooter}>
                        <TouchableOpacity onPress={toggleDialog}>
                            <Text style={styles.dialogCancelIcon}>CANCEL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity disabled={!title || !description || loading} onPress={addTaskHandler} style={styles.dialogAddIcon}>
                            <Icon name='check' size={32} color='#4682B4' />
                        </TouchableOpacity>
                    </View>
                </Dialog.Content>
            </Dialog>
        </>
    )
}

export default Home



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#4682B4',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingBottom: 60
    },
    heading: {
        backgroundColor: "#0047AB",
        elevation: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 22,
        color: '#fff',
        fontSize: 22
    },
    addIcon: {
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
        bottom: 30,
        right: 10
    },
    dialogFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dialogAddIcon: {
        backgroundColor: '#fff',
        elevation: 1,
        width: '150',
        height: '150',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 100,
        padding: 15,
    },
    dialogCancelIcon: {
        fontSize: 15,
        backgroundColor: '#D3D3D3',
        fontWeight: '600',
        padding: 10,
        borderRadius: 10
    }
})