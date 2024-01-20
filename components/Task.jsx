import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { Checkbox } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Task = ({ taskId, title, description, status }) => {

    const [completed, setCompleted] = useState(status)

    const handleCheckbox = () => {
        setCompleted(!completed)
    }
    const handleDelete = () => {
        console.log('Delete a Task')
    }



    return (
        <View style={styles.main}>
            <View style={styles.leftView}>
                <Checkbox onPress={handleCheckbox} status={completed ? 'checked' : 'unchecked'} color='#474747' />

                <View style={styles.taskDetails}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
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
    leftView:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    taskDetails: {
        width: '70%'
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