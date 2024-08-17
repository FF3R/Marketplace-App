import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business}) {
  const navigation =useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={()=>
      navigation.push('business-detail',{
        business:business
      })
      
    }>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}/> 
      <View style={styles.subContainer}>
    <Text style={{fontFamily:'outfit', color:Color.GRAY, fontSize:15}}>{business?.contactPerson}</Text>
    <Text style={{fontFamily:'outfit',  fontSize:19, fontWeight:'700'}}>{business?.name}</Text>
    <Text style={{fontFamily:'outfit', color:Color.GRAY, fontSize:16}}><Entypo name="location-pin" size={16} color={Color.PRIMARY} />{business?.address}</Text>
    
  </View>
  
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius:15
    },
    container:{
        padding:10,
        backgroundColor:Color.WHITE,
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10

    },
    subContainer:{
        display:'flex',
        gap:8
    }

})