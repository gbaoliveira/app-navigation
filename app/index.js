import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Link, useRouter} from 'expo-router';

const LoginPage = () => {

  const router = useRouter()

  const handlePress = () => {
    router.replace('home')
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Pressable onPress={handlePress}>
    <Text>Login</Text>
    </Pressable>   

    <Link href={'/register'} asChild>
    <Pressable>
        <Text>Criar conta</Text>
    </Pressable>
    </Link>
    </View>
  )
}

export default LoginPage