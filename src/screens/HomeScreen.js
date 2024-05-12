import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/features';
import { dummyMessages } from '../constants';
import Voice from '@react-native-voice/voice';


export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const speechStartHandler = e=>{
    console.log('speech start handler')
  }
  const speechEndHandler = e=>{
    setRecording(false);
    console.log('speech end handler')
  }
  const speechResultsHandler = e=>{
    console.log('voice event : ' , e)
  }
  const speechErrorHandler = e=>{
    console.log('speech error handler' , e)
  }

  const startRecording = async ()=>{
    setRecording(true);
    try{
      await Voice.start('tr-TR'); // türkçe dili için 
    }catch(error){
      console.log('error : ' , error);
    }
  }
  const stopRecording = async ()=>{
    try{
      await Voice.stop();
      setRecording(false);
      // fetch response  40.59 
    }catch(error){
      console.log('error : ' , error);
    }
  }

  const clear = () => {
    setMessages([]);
  }

  const stopSpeaking = () => {
    setSpeaking(false);
  }

  useEffect(() => {
    // ses işleyici events 
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    return()=>{
      // ses örneğini sonlandırma 
      Voice.destroy().then(Voice.removeAllListeners);
    }

  }, [])
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
                                  source={{ uri: message.content }}
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

        {/* kayıt , temizleme ve durdurma butonu  */}

        <View className="flex justify-center items-center">
          {
            recording ? (

              <TouchableOpacity>
                <Image className="rounded-full bottom-6"
                  source={require('../../assets/images/animationMic.gif')}
                  style={{ width: hp(12), height: hp(12) }}>

                </Image>
              </TouchableOpacity>

            ) : (
              <TouchableOpacity>
                <Image className="rounded-full bottom-6"
                  source={require('../../assets/images/micro.png')}
                  style={{ width: hp(8), height: hp(8) }}>

                </Image>
              </TouchableOpacity>

            )
          }

          {
            messages.length > 0 && (
              <TouchableOpacity
                onPress={clear}
                className="bg-neutral-400 rounded-3xl p-2 absolute right-6 bottom-9">
                <Text className="text-white font-semibold"> Temizle </Text>
              </TouchableOpacity>
            )
          }
          {
            speaking && (
              <TouchableOpacity
                onPress={stopSpeaking}
                className="bg-red-400 rounded-3xl p-2 absolute left-6 bottom-9">
                <Text className="text-white font-semibold"> Dur </Text>
              </TouchableOpacity>
            )
          }
        </View>
      </SafeAreaView>
    </View>
  )
}