import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={{ paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
        <SafeAreaView>
            <Text>Dario</Text>
        </SafeAreaView>
    </View>
  )
}

export default Main
