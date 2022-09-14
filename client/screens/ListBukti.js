import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import IconFeather from "react-native-vector-icons/Feather";

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListBukti = ({ navigation }) => {
  const renderItem = () => {
    return (
      <View className="flex-row mt-4 justify-between items-start">
        <View className="flex-1 flex-row items-start">
          <IconFeather name="repeat" size={26} color="#107bd0" />
          <View className="ml-2">
            <Text className="font-semibold text-[15px]">
              Pembayaran Desember
            </Text>
            <Text className="text-sm text-gray-400 font-normal mt-1">
              12 Desember 2022
            </Text>
          </View>
        </View>
        <Text className="text-md font-medium text-gray-500">Rp.660.000</Text>
      </View>
    );
  };
  return (
    <View className="py-7 px-6 flex-1 bg-white">
      <View className="flex-row  items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconFeather
            name="arrow-left"
            size={28}
            color="#101010"
          ></IconFeather>
        </TouchableOpacity>
        <Text className="ml-7 text-xl font-medium">Bukti Pembayaran</Text>
      </View>
      <View className="flex-row items-center justify-between mt-7">
        <TouchableOpacity className="w-[30%] border-2 border-blue-300 py-2 rounded-full">
          <Text className="text-center text-blue-300 text-lg font-medium">
            2020
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[30%] border-2 border-blue-300 py-2 rounded-full">
          <Text className="text-center text-blue-300 text-lg font-medium">
            2021
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[30%] bg-[#107BD0] py-2 rounded-full">
          <Text className="text-center text-white text-lg font-medium">
            2022
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        style={{ marginTop: 25 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListBukti;
