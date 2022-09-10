import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Notification = () => {
  const RenderItem = ({ item }) => {
    return (
      <View className="flex-row mt-4">
        <View className="flex-row items-start flex-1">
          <View className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-1"></View>
          <View className="flex-1">
            <Text className="font-semibold text-xs">
              Selamat Datang di Aplikasi Digital SPP!
            </Text>
            <Text className="mt-1 text-[10px] font-medium text-gray-400 leading-4">
              Halo Angel, terimakasih telah melakukan registrasi di Aplikasi
              Digital SPP. Menikmati beragam fitur untuk...
            </Text>
          </View>
        </View>
        <Text className="text-[9px] text-gray-500">28 Jan</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={dummyData}
      keyExtractor={(item) => item}
      renderItem={RenderItem}
      style={{ marginVertical: 5 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Notification;
