import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

// import components
import { Task } from '../components'

import Icon from 'react-native-vector-icons/Entypo'

// import {useNavigation} from '@react-navigation/native'

const Home = ({ navigation }) => {

    // const navigation = useNavigation()

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
        }
    ]

    return (
        <View style={styles.main}>
            <SafeAreaView>
                <Text style={styles.heading}>All Task</Text>

                <ScrollView>
                    {tasks.map((task) => (
                        <Task key={task._id} taskId={task._id} title={task.title} description={task.description} status={task.completed} />
                    ))}
                </ScrollView>

                <TouchableOpacity>
                    <Icon name='add-to-list' size={32} color='#4682B4' style={styles.addIcon} />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Home



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#4682B4',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    heading: {
        backgroundColor: "#0F52BA",
        elevation: 10,
        padding: 15,
        color: '#fff',
        fontSize: 25
    },
    addIcon:{
        backgroundColor:'#fff',
        elevation:25,
        width:'150',
        height:'150',
        justifyContent:'center',
        alignContent:'center',
        borderRadius: 100,
        alignSelf: 'flex-end',
        padding:15,
        marginRight:15
    }
})