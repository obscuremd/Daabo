import { Button, StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import React, { useRef } from 'react';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Test = ({ setCurrent }) => {

  const action = event => {
    const { nativeEvent } = event;
    if (nativeEvent.translationX > 100) {
      Alert.alert('gesture completed')
      setCurrent(3)
    }
  };
 

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PanGestureHandler onGestureEvent={action}>
        <View style={styles.swipe}>
          <Text style={styles.text}>Swipe to the right</Text>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  )};

export default Test;

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: 600,
    color:'#fff'
  },
  swipe: {
    paddingVertical: 16,
    flex:1,
    width: 327,
    backgroundColor: '#6B4EFF',
    alignItems: 'center',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems:'center'
  },
});
