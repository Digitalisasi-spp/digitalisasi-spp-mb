import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { welcomeData } from "../constants/data";

const Welcome = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="flex-1 flex-col items-center justify-center px-10">
        <Image
          source={welcomeData[index].image}
          resizeMode="contain"
          className="w-full"
        />
        <View className="mt-5">
          <Text className="text-gray-500 text-2xl font-bold text-center">
            {welcomeData[index].title}
          </Text>
          <View className="flex-row items-center mt-10 justify-center">
            {welcomeData?.map((data, idx) => (
              <TouchableOpacity
                className={`${
                  idx === index ? "bg-blue-500" : "bg-gray-400"
                } w-3 h-3  rounded-full mx-1`}
                key={idx}
              ></TouchableOpacity>
            ))}
          </View>
        </View>
        {index === 2 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            className="py-3 bg-blue-500 rounded-full mt-7 w-full"
          >
            <Text className="text-white font-semibold text-md text-center">
              Login
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={async () => setIndex(index + 1)}
            className="py-3 bg-blue-500 rounded-full mt-7 w-full"
          >
            <Text className="text-white font-semibold text-md text-center">
              Next
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => setIndex(welcomeData.length - 1)}
          className="bg-transparent mt-7"
        >
          <Text className="text-md font-medium text-gray-400">Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
