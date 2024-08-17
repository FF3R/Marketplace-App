import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../Utils/Color';
import { Entypo } from '@expo/vector-icons';
import Heading from '../../Components/Heading';

export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const [showFullText, setShowFullText] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {}, []);

  return (
    <View>
    <ScrollView style={{ height:'91%'}}>
      <TouchableOpacity
        style={styles.backBtnContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
        <Text style={{ fontSize: 25, fontFamily: 'outfit', fontWeight: '700' }}>{param?.category}</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={{ fontFamily: 'outfit', fontSize: 25, fontWeight: '700' }}>{business?.name}</Text>
        <View style={styles.subContainer}>
          <Text style={{ fontFamily: 'outfit', color: Color.PRIMARY, fontSize: 20 }}>{business?.contactPerson}</Text>
          <Text
            style={{
              color: Color.PRIMARY,
              backgroundColor: Color.PRIMARY_LIGHT,
              padding: 5,
              borderRadius: 5,
              fontSize: 14,
            }}
          >
            {business?.category.name}
          </Text>
        </View>
        <Text style={styles.addressText}>
          <Entypo name="location-pin" size={25} color={Color.PRIMARY} />
          {business?.address}
        </Text>

        <View style={{ borderWidth: 0.3, borderColor: Color.GRAY, marginTop: 20, marginBottom: 20 }}></View>

        <View>
          <Heading text={'About Me'} />
          <View
            style={{ maxHeight: showFullText ? 2000 : 0, marginBottom: 10 }} 
            
          >
            <Text style={{ fontFamily: 'outfit', color: Color.GRAY, fontSize: 16, lineHeight: 28 }}>
              {business.about}
            </Text>
          </View>
          {!showFullText && (
            <Text
              style={{ fontFamily: 'outfit', color: Color.GRAY, fontSize: 16, lineHeight: 28 }}
              numberOfLines={5}
            >
              {business.about}
            </Text>
          )}
          <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
            <Text style={{ color: Color.PRIMARY, fontSize: 16, fontFamily: 'outfit' }}>
              {showFullText ? 'Read Less' : 'Read More'}
            </Text>
          </TouchableOpacity>

          <View style={{ borderWidth: 0.3, borderColor: Color.GRAY, marginTop: 20, marginBottom: 20 }}></View>
          <Heading text={'Photos'} />
          <FlatList
          data={business?.images}
          numColumns={2}
          renderItem={({item})=>(
            <Image source={{uri:item.url}}
            style={{width:'100%',height:120, flex:1, borderRadius:15,margin:7}}
            />
  )}
          />
        </View>
      </View>
    </ScrollView>
    <View style={{
      display:'flex',
      flexDirection:'row',
      margin:8,
      gap:8
    }}>
      <TouchableOpacity style={styles.messageBtn}>
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit',
          color:Color.PRIMARY,
          fontWeight:'700',
          fontSize:18
        }}>
          Message
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookingBtn}>
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit',
          color:Color.WHITE,
          fontWeight:'700',
          fontSize:18
        }}>
          Booking
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: 'flex',
    gap: 7,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addressText: {
    fontFamily: 'outfit',
    color: Color.GRAY,
    fontSize: 17,
  },
  messageBtn:{
    padding:15,
    backgroundColor:Color.WHITE,
    borderWidth:1,
    borderColor:Color.PRIMARY,
    borderRadius:99,
    flex:1
    

  },
  bookingBtn:{
    padding:15,
    backgroundColor:Color.PRIMARY,
    borderWidth:1,
    borderColor:Color.PRIMARY,
    borderRadius:99,
    flex:1
  }
});
