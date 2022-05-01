import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'

const styles = {
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  }

const Block2 = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View testID="Hello" style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View testID="Beautiful" style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
        </View>
    </Swiper>
  )
}

export default Block2

const style = StyleSheet.create({})