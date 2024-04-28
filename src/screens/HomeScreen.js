import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/features';

export default function HomeScreen() {
  const [messages,setMessages] = useState([]);
  return (
    <View className="flex-1 bg-custompink">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}

        <View className="flex-row justify-center">
          <Image source={require('../../assets/images/Design.png')} style={{ height: hp(15), width: hp(15) }} >

          </Image>

        </View>

        {/* mesajlar , özellikler */}

        {
          messages.length>0? (
            <View>

            </View>
          ):(

            <Features />
 
            
          )
        }



      </SafeAreaView>
    </View>
  )
}