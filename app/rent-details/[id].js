import { useCallback, useState } from "react";
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {COLORS, SIZES, icons} from "../../constants";
import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifics,
  } from "../../components";
 
const PostingDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => <ScreenHeaderBtn iconUrl={icons.left} dimension = "60%" handlePress={() => router.back()} />
                }}>
            </Stack.Screen>
        </SafeAreaView>
    )
}

export default PostingDetails