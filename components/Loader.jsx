import { View,StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size={80} color='#4682B4' />
    </View>
  )
}

export default Loader



const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})