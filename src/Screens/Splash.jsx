import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'

const Splash = ({setActive}) => {

    const [index, setIndex]=useState(2)

    const images=[
        {
            img: 'https://s3-alpha-sig.figma.com/img/ff41/6b7b/057d8cd809c3150495b726f7a152ffe7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEBTvZHJz3BJgzxo1skE8C1IHpnJU4tSjavFamD9nwFzvWgzQPjhV5wLAq9UhQFr4KZhHt6HqFwpIKcni~jVFCJ~9XS4esS3gOML7T7ngoVNibO2z-EB~5~FlkIoRE28O9a78NeNYocKNTH5yocgTYgz6W4iDeVf3giC-JmDbLVK5cl0DtcdKChjQDteLyj5bsDhI5uChcz8My5Qwg8un2p5djQYtbKzez1rp7i2mFSC-e7SN60MB-Wwll8SsHjk4Z75KK2fKbK32SqCFsrsOg3fmApMgJ3zEn4eanjvIxXo~yIWH5IzLh1A3NB-aNbTogM0~4ZvQ5zvmcHzm0T3Uw__',
            text: 'Accidents can happen at anytime ',
            border:'#FEC9D2'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/30b3/2a8b/fed8b0ea6d5422d39996c7a404f1a322?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZciXMW0XLFvaUiAaar1VLDbAMwEEAVn~zMmgwFAF0Kq-uujMLBUGbI~F29xg-libJYC9xN2qY2dgLcVpI2YmFW6mtIyb2qRnChieE7ei73E55GxX8KlwWz4BuZp~WJ1kKu-KD0k5f6zC4h1m8Kk6Fw2gfueQUo3xSz1bgnP6zmXc~kqGFAKwXAx782oDxxkUmLvDoTTy-9ofV-eWCq~vbXVa~OwI40TV-Qg2LvD2cGeCZi61ekXT4hxaMrXoF-26yfSuFQdofNrh4O7JAXL5PVoOmQ5n74JYWkm5xRPKiJdY1SUJEOTq4Os5xREGpjPxZSzo2egTh0sm2g0HfoIlg__',
            text: 'Protect as many devices as you want',
            border:'#FFD993'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/6b11/82c6/15949122af43a9021eb02f9622e553cb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0Zx0paxGb-ADWMKyAD7bPywz1JJGVg3gZrzQzomaXiyYYuhW~Zn76xk38yNgJWVr1Wxr1fcck9b86yHN6mCJDX7PdQj6658gyCqem61NvgfEeff7aZk4Nh-0mamAQn2EFBrnb9py-eaGz7swfOSe13MDmyjKoasmNI~viuu7QvHB6QMMbmFEG7GTEhq~H9uea3VhvrbOT8k4sf70ONY5qCtF02MsKiAX1-05TctDMJCWfKAF9gBKQMUmDTQGLOl2~OgRL8bZqdqa53IxaOlghCZ-3Rro5bvvbshSZzr2BHFQFfFKLmKhUYAICjC4VnmQGnf-1Th5d88JY9BkXx03A__',
            text: 'Know the condition of your phone by doing a device diagnostics',
            border:'#CDBFB3'
        }
    ]

    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prevIndex)=>(prevIndex + 1) % images.length)
        }, 2000);

        return()=>clearInterval(interval)
        
    },[])


  return (
    <View style={{alignItems:'center'}} >
        {/* splash */}
       <SplashScreen image={images[index].img} text={images[index].text} border={images[index].border}/>

        {/* indicator */}
        <View style={{flexDirection:'row', gap:8}}>
            {images.map((image,idx)=>(
                <View key={idx} style={[styles.indicator, {backgroundColor: index === idx ? '#6B4EFF': '#E3E5E5'}]}/>
            ))}
        </View>

        {/* get started */}
        <TouchableOpacity style={styles.button} onPress={()=>setActive(1)}>
            <Text style={{color:'#F5F5F5', fontSize:16}}>Get started</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    indicator:{
        width: 8,
        height: 8,
        borderRadius: 100,
    },
    button:{
        width: 327,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#6B4EFF',
        borderRadius: 9,
        marginTop:151
    }
})