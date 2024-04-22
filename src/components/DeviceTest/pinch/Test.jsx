import { Button, StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { GestureHandlerRootView, PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign } from '@expo/vector-icons';


const Size = 200

const Test = ({ setCurrent }) => {

  const [scale, setScale] = useState(300)

  const action = event => {
    const { nativeEvent } = event;
    if (nativeEvent.scale < 1) {
      // Pinch inwards (zoom out)
      setScale(prevScale => Math.max(100, prevScale - 10 * Math.abs(nativeEvent.scale)));
    } else if (nativeEvent.scale > 1) {
      // Pinch outwards (zoom in)
      setScale(prevScale => Math.min(500, prevScale + 10 * Math.abs(nativeEvent.scale)));
    }
  };

  const check =()=>{
    if (scale <= Size) {
      Alert.alert('continue')
      setCurrent(4)
    } else {
      Alert.alert('failed')
    }
  }
 

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:151 }}>

        <Text style={styles.text}>Please shrink the image into the box by pinching it</Text>
        
        <View style={styles.box}>
          <PinchGestureHandler onGestureEvent={action} onHandlerStateChange={action}>
            <AntDesign name="star" size={scale} color="#FFD15C" style={{position:'absolute',}}/>
          </PinchGestureHandler>
        </View>
      
        <TouchableOpacity style={styles.Button} onPress={check}>
          <Text style={{color:'#fff'}}>Submit</Text>
        </TouchableOpacity>

    </GestureHandlerRootView>
  )};

export default Test;

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: 600,
    textAlign: 'center'
  },
  box: {
    paddingVertical: 16,
    height: Size,
    width: Size,
    backgroundColor: '#6B4EFF',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems:'center',
  },
  Button: {
    paddingVertical: 16,
    width: 327,
    height: 48,
    backgroundColor: '#6B4EFF',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems:'center',
  },
});
