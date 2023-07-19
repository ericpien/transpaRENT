import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import { useRouter } from "expo-router";

import styles from './recentlyshared.style'
import { COLORS, SIZES } from "../../../constants";
import RecentlysharedCard from "../../common/cards/recentlyshared/RecentlysharedCard";

const Recentlyshared = () => {

  const router = useRouter();
  const data = [1,2,3,4,5,6,7,8,9,10];
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RecentlyShared</Text>
        <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map((item) => (
            <RecentlysharedCard
              item={item}
              // key="testing_id"
              handleNavigate={() => router.push(`/rent-details/${item}`)}
            />)
          ))
        }      
      </View>
    </View>
  )

}

export default Recentlyshared