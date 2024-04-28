import { View, Text , Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Features() {
  return (
    <View style={{height:hp(90)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Gülistan</Text>
      <View className="bg-customgpt p-4 rounded-xl space-y-2" >
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/gpt.png') } style={{height: hp(4), width : hp(4) , borderRadius : hp(5) }} />
            <Text style ={{fontSize: wp(7)}} className="font-semibold text-gray-700 "> Chat GPT</Text>

        </View>

      </View>
    </View>
  )
}