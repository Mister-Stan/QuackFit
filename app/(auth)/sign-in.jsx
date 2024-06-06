import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
            <Text className="text-secondary-200 text-5xl font-extrabold">QuackFit</Text>

            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to QuackFit</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn