import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Features() {
  return (
    <View style={{ height: hp(90) }} className="space-y-4">
      <Text style={{ fontSize: wp(6.5) }} className="font-semibold text-gray-700">Gülistan</Text>
      <View className="bg-customgpt p-10 rounded-xl space-y-2" >
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/gpt.png')} style={{ height: hp(5), width: hp(5), borderRadius: hp(5) }} />
          <Text style={{ fontSize: wp(7) }} className="font-semibold text-gray-700 "> Chat GPT </Text>
        </View>

      </View>
      <View className="bg-customdall p-10 rounded-xl space-y-2" >
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/dall.png')} style={{ height: hp(5), width: hp(5), borderRadius: hp(5) }} />
          <Text style={{ fontSize: wp(7) }} className="font-semibold text-gray-700 "> DALL-E </Text>
        </View>

      </View>
      <View className="bg-customsmart p-10 rounded-xl space-y-2" >
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/smart.png')} style={{ height: hp(5), width: hp(5), borderRadius: hp(5) }} /> {/* rounded = border raidus */}
          <Text style={{ fontSize: wp(7) }} className="font-semibold text-gray-700 "> Smart AI </Text>
        </View>

      </View>
    </View>
  )
}