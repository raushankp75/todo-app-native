import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Checkbox } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import { useDispatch } from 'react-redux'
import { deleteTask, getAllTasks, updateTaskStatus } from '../redux/task/taskAction'


const Task = ({ taskId, title, description, status }) => {

    const navigation = useNavigation()

    // redux 
    const dispatch = useDispatch()

    const [completed, setCompleted] = useState(status)

    const handleCheckbox = () => {
        setCompleted(!completed)
        // console.log(taskId)
        dispatch(updateTaskStatus(taskId))
        dispatch(getAllTasks())
    }
    const handleDelete = async () => {
        // console.log(taskId)
        await dispatch(deleteTask(taskId))
        dispatch(getAllTasks())
    }


    const handleTaskUpdateButton = (taskId) => {
        navigation.navigate('taskupdate', { id: taskId })
        //    console.log(taskId)
    }



    return (
        <View style={styles.main}>
            <View style={styles.leftView}>
                <Checkbox onPress={handleCheckbox} status={completed ? 'checked' : 'unchecked'} color='#474747' />

                <TouchableOpacity onPress={() => handleTaskUpdateButton(taskId)} style={styles.taskDetails}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </TouchableOpacity>
            </View>

            <Icon onPress={handleDelete} name='delete' color='#D22B2B' size={25} />
        </View>
    )
}

export default Task



const styles = StyleSheet.create({
    main: {
        backgroundColor: "#6082B6",
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 8,
        margin: 7,
        elevation: 10,
        borderRadius: 20,
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    taskDetails: {
        width: '81%'
    },
    title: {
        color: '#E5E4E2',
        marginVertical: 7,
        fontSize: 18
    },
    description: {
        color: '#D3D3D3'
    }
})