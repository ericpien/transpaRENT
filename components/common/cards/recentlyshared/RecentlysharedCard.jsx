import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './recentlysharedcard.style'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from "expo-router";

const RecentlysharedCard = ({item, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Text>Marple</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.rentName} numerOfLines={1}>
          {item}
        </Text>
        <Text style={styles.rentType}>{item}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default RecentlysharedCard