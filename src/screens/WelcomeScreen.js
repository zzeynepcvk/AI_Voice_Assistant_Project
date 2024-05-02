import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-custompink">
      <View className="space-y-2">
        <Text style={{ fontSize: wp(10) }} className="text-center font-bold text-gray-700">
          GÜLİSTAN 
        </Text>
        <Text style={{ fontSize: wp(5) }} className="text-center tracking-wider  text-gray-600 font-extrabold ">
          Sizi Dinliyorum ...
        </Text>
      </View>

      <View className="flex-row justify-center">
        <Image source={require('../../assets/images/Design.png')} style={{ width: wp(75), height: wp(75) }} className="w-72 h-72"></Image>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-custombutton mx-5 p-4 rounded-2xl">
        <Text style={{ fontSize: wp(6) }} className="text-center font-bold text-white text-2xl">Sor Bakalım</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}



