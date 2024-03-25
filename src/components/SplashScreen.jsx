import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = ({image, text, border}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={[styles.image, {borderColor:border}]}/>
      <Text style={{textAlign:'center',fontSize: 21}}>{text}</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical:60,
        gap:35
      },
    image:{
        width: 248,
        height: 248,
        borderRadius: 296,
        resizeMode:'cover',
        borderWidth:7,
    }
})