import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalApi.getBusinessList().then(resp => {
      
      setBusinessList(resp.buisnessLists); 
    });
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={'Latest Business'} isViewAll={true} />
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id} // Ensure each item has a unique key
        renderItem={({ item,index }) => (
          <View style={{marginRight:10}}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
