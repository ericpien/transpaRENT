import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
 } from 'react-native'
import {useRouter} from "expo-router";
import {icons, SIZES} from '../../../constants';

import styles from './welcome.style'

const rentalTypes = ["1BR", "2BR", "Studio", "Shared Condo", "Laneway"];

const Welcome = () => {
  const router = useRouter();
  const [activeRentalType, setActiveRentalType] = useState("1BR");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Eric</Text>
        <Text style={styles.welcomeMessage}>Check your rent</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value="" 
            onChange={() => {}} 
            placeholder="Where do you want to check?" />
        </View>
        <TouchableOpacity 
          style={styles.searchBtn} 
          onPress={() => {}}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>  
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={rentalTypes} 
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeRentalType, item)} 
              onPress={() => {
                setActiveRentalType(item);
                router.push(`/search/${item}`)}}>  
              <Text style={styles.tabText(activeRentalType, item)}>{item}</Text>
            </TouchableOpacity>)}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>    
    </View>
  )
}

export default Welcome