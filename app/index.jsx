import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from 'react-native-reanimated';
import CustomButton from "../components/CustomButton";  

import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center h-full px-4">
          <Animated.Text 
            entering={FadeInUp.duration(1000)} 
            className="text-5xl font-extrabold text-yellow-400 mb-10"
          >
            QuackFit
          </Animated.Text>
          <Animated.Image
            source={images.logo}
            entering={FadeInUp.duration(1000).delay(500)}
            className="w-[430px] h-[304px] brightness-125 mt-5"
            resizeMode="contain"
          />
          
          <View className="relative mt-10">
            <Text className="text-3xl text-white font-bold text-center">
              Unleash Your Inner Duck with <Text className="text-secondary-200">QuackFit</Text>
            </Text>
          </View>
          
          <Image 
            source={images.path}
            className="w-[150px] h-[20px] mt-2 ml-20" 
            resizeMode="contain"
          />
          
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Fun meets fitness. Transform with QuackFit and let your inner duck soar.
          </Text>

          <CustomButton
            title="Continue with email"
            handlePress={() =>{}}
            containerStyles="mt-7 w-full"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
