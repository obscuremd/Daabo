import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Earpiece from '../../components/DeviceTest/earpiece/Earpiece'
import Start from './Start'
import TouchScreen from '../../components/DeviceTest/TouchScreen/TouchScreen'
import Pinch from '../../components/DeviceTest/pinch/pinch'
import Microphone from '../../components/DeviceTest/Microphone/Microphone'
import Speaker from '../../components/DeviceTest/Speaker/Speaker'
import FrontCamera from '../../components/DeviceTest/FrontCamera/FrontCamera'
import Accelerometer from '../../components/DeviceTest/Accelerometer/Accelerometer'
import BackCamera from '../../components/DeviceTest/BackCamera/BackCamera'
import Gps from '../../components/DeviceTest/Gps/Gps'

const DeviceTest = () => {

  const [current, setCurrent] =useState(0)

  return (
    <View>
      {current == 0 && <Start setCurrent={setCurrent}/>}
      {current ==1 && <Earpiece setCurrent={setCurrent}/>}
      {current ==2 && <TouchScreen setCurrent={setCurrent}/>}
      {current ==3 && <Pinch setCurrent={setCurrent}/>}
      {current ==4 && <Microphone setCurrent={setCurrent}/>}
      {current ==5 && <Speaker setCurrent={setCurrent}/>}
      {current ==6 && <FrontCamera setCurrent={setCurrent}/>}
      {current ==7 && <BackCamera setCurrent={setCurrent}/>}
      {current ==8 && <Accelerometer setCurrent={setCurrent}/>}
      {current ==9 && <Gps setCurrent={setCurrent}/>}
    </View>
  )
}

export default DeviceTest

const styles = StyleSheet.create({})