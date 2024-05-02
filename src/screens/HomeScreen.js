import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/features';
import { dummyMessages } from '../constants';


export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
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
          messages.length > 0 ? (
            <View className="space-y-2 flex-1">
              <Text style={{ fontSize: wp(5) }} className="text-gray-700 font-semibold ml-1" >
                Gülistan
              </Text>

              <View
                style={{ height: hp(58) }} className="bg-customchatbg rounded-3xl p-4">
                <ScrollView bounces={false}
                  className="space-y-4"
                  showsVerticalScrollIndicator={false}>

                  {
                    messages.map((message, index) => {
                      if (message.role == 'assistant') {
                        if (message.content.includes('https')) {
                          // ai resmi 
                          return (
                            <View
                              key={index} className="flex-row justify-start">
                              <View className="p-2 rounded-2xl bg-customgpt rounded-tl-none">
                                <Image
                                  source={{uri: message.content}}
                                  className="rounded-2xl"
                                  resizeMode='contain'
                                  style={{ height: wp(60), width: wp(60) }}>
                                  </Image>
                              </View>
                            </View>
                          )
                        } else {
                          //yazılı cevap 
                          return (
                            <View
                              key={index}
                              style={{ width: wp(70) }}
                              className="bg-custombotbg rounded-xl p-2 rounded-tl-none">
                              <Text>
                                {message.content}
                              </Text>

                            </View>

                          )
                        }
                      } else {
                        // kullanıcı girişleri
                        return (
                          <View key={index} className="flex-row justify-end">
                            <View
                              style={{ width: wp(70) }}
                              className="bg-customuserbg rounded-xl p-2 rounded-tr-none">
                              <Text>
                                {message.content}
                              </Text>

                            </View>
                          </View>)
                      }

                    })
                  }
                </ScrollView>

              </View>
            </View>
          ) : (

            <Features />


          )
        }

        {/* kayıt temizleme ve durdurma butonu  */}

        <View className="flex justify-center items-center">
          <TouchableOpacity>
            <Image className="rounded-full"
            source={require('../../assets/images/micro.png')}
            style={{width: hp(10), height: hp(10)}}>

            </Image>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  )
}