import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Color from '../../Utils/Color';


export default function BusinessListByCategoryScreen() {
  const param=useRoute().params;
  const navigation=useNavigation();

  const[buisnessLists,setBusinessList]=useState([]);
  useEffect(()=>{
    param&&getBusinessByCategory()
  },[param])

  const getBusinessByCategory=()=>{
    GlobalApi.getBusinessListByCategory(param.category)
    .then(resp=>{
      setBusinessList(resp.buisnessLists)
    })
  }

  return (
    <View style={{padding:20, paddingTop:30}}>
      <TouchableOpacity style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}
      onPress={()=>navigation.goBack()}
      >
      <Ionicons name="arrow-back" size={30} color="black" />
      <Text style={{fontSize:25, fontFamily:'outfit', fontWeight:'700'}}>{param?.category}</Text>
      </TouchableOpacity>
     {buisnessLists?.length>0? <FlatList
      data={buisnessLists}
      showsVerticalScrollIndicator={false}
      style={{marginTop:15}}
      renderItem={({item,index})=>(
        <BusinessListItem business={item}/>
      )}
      
      />:
      <Text style={{marginTop:'20%', fontFamily:'outfit', fontWeight:'700', fontSize:20, textAlign:'center', color:Color.GRAY}}>No Buisness Found</Text>}
  
    </View>
  )
}