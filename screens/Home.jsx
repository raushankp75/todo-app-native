import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

// import components
import { Task } from '../components'

import Icon from 'react-native-vector-icons/Entypo'
import { Dialog, Button, TextInput } from 'react-native-paper'


const Home = () => {

    const tasks = [
        {
            _id: 1,
            title: 'Task1',
            description: 'Description1',
            completed: true
        },
        {
            _id: 2,
            title: 'Task2',
            description: 'Description2',
            completed: false
        },
        {
            _id: 3,
            title: 'Task3',
            description: 'Description3',
            completed: false
        },
        {
            _id: 4,
            title: 'Task4',
            description: 'Description4',
            completed: false
        },
        {
            _id: 5,
            title: 'Task5',
            description: 'Description5',
            completed: false
        },
        {
            _id: 6,
            title: 'Task6',
            description: 'Description6',
            completed: false
        },
        {
            _id: 7,
            title: 'Task7',
            description: 'Description7',
            completed: false
        },
        {
            _id: 8,
            title: 'Task8',
            description: 'Description8',
            completed: false
        },
        {
            _id: 9,
            title: 'Task9',
            description: 'Description9',
            completed: false
        },
        {
            _id: 10,
            title: 'Task10',
            description: 'Description10',
            completed: false
        }
    ]


    const [openDialog, setOpenDialog] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const toggleDialog = () => {
        setOpenDialog(!openDialog)
    }
  
    const addTask = () => {
        console.log(`Title: ${title}, Description: ${description}`)

        

        setTitle("")
        setDescription("")
    }



    return (
        <>
            <View style={styles.main}>
                <SafeAreaView>
                    <Text style={styles.heading}>All Task</Text>

                    <ScrollView>
                        {tasks.map((task) => (
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

                        <TouchableOpacity onPress={addTask} style={styles.dialogAddIcon}>
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