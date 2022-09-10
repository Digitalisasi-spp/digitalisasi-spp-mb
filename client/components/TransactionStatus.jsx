import { View, Text, FlatList } from "react-native";
import React from "react";
import IconFeather from "react-native-vector-icons/Feather";

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TransactionStatus = () => {
  const RenderItem = ({ item }) => {
    return (
      <View className="flex-row mt-5 items-start justify-between">
        <View className="flex-1">
          <Text className="text-gray-500 font-medium  text-[13px] mb-2">
            05 Agustus 2022
          </Text>
          <View className="flex-row items-start">
            <IconFeather
              name="folder"
              size={24}
              color="#107bd0"
              style={{ marginTop: 8 }}
            />
            <View className="ml-3">
              <Text className="font-semibold">Bank BCA</Text>
              <Text className="font-semibold">fXXXXXXXXXXS</Text>
              <Text className="text-green-600 font-semibold mt-1">
                Berhasil
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-blue-500 mt-1 font-medium">-- Rp 663.000</Text>
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

export default TransactionStatus;
