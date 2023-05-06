import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const ProfilePage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link href="/">Deslogar</Link>
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({})