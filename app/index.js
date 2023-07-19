import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images} from "../constants";
import { Recentlyshared, ScreenHeaderBtn, Welcome } from "../components";
import { TextInput } from "react-native-gesture-handler";

const Home = function() {

    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options = {{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: true,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="90%" />
                    ),
                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                    <Welcome />
                    <Recentlyshared />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;