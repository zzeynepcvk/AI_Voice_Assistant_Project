import { View, Text , SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigation from './src/navigation';
import { apiCall } from './src/api/openAI';

export default function App() {
  useEffect(()=>{
/*     apiCall('what is quantum computing');
 */
  },[])
  return (
   <AppNavigation/>
  )
}

/* ben expo kullanıyorum , react cli değil  */