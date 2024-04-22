import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, Alert, Image } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';


const Test = ({setCurrent}) => {

  const [active, setActive] = useState(0)
  const [permission, setPermission] = useState(false);
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  const request =async()=>{
    const { status } = await Camera.requestCameraPermissionsAsync();
    if(status === 'granted'){
      Alert.alert('access granted')
      setPermission(true)
    }
  }

  const takePicture = async () => {
    console.log("Taking picture...");
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log("Photo taken:", photo.uri);
        setPhotoUri(photo.uri);
        setActive(1);
      } 
      catch (error) {
        console.error("Error taking picture:", error);
      }
    } else {
      console.error("Camera reference is null.");
    }
  }
  
  useEffect(()=>{
    request()
  },[])


  const CameraPage=()=>{
    return(
      <View style={{flex:1}}>

        {permission
          ?
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Camera type={CameraType.back} style={styles.camera} ref={cameraRef}/>
            <TouchableOpacity onPress={takePicture} style={styles.button}/>
            
          </View>
          :
          
          <TouchableOpacity onPress={request}>
            <Text>request camera</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }

  const PicturePage =()=>{
    return(
      <View style={{flex:1, gap:30}}>
        <TouchableOpacity onPress={()=>setActive(0)}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{uri:photoUri}} style={styles.camera}/>
        <Text onPress={()=>setCurrent(8)} style={{alignSelf:'center'}}>Next</Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {active==0 && <CameraPage/>}
      {active==1 && <PicturePage/>}
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({
  
  text:{
    fontSize:21, 
    fontWeight:600
  },
  button:{
    height:48,
    width: 48,
    borderRadius:50,
    backgroundColor:'#6B4EFF',
    textAlign:'center',
  },
  camera:{
    paddingVertical:16, 
    width:327,
    flex:1,
    borderRadius:50,
    alignItems:'center', 
    borderRadius:9,
  }
})