import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  SectionList,
} from "react-native";
import React from "react";
import IconFeather from "react-native-vector-icons/Feather";

const Bukti = () => {
  return (
    <SafeAreaView className="flex-1 py-5 bg-white">
      <ScrollView>
        <Text className=" py-5 text-center text-xl font-semibold">
          Kirim Bukti Pembayaran
        </Text>
        <TouchableOpacity
          className="mx-7 bg-gray-100 rounded-lg items-center justify-center py-7"
          style={{
            borderStyle: "dashed",
            borderColor: "#dddd",
            borderWidth: 2,
          }}
        >
          <IconFeather name="upload" size={32} color="#107BD0" />
          <Text className="text-gray-500 mt-3">Unggah file kamu disini</Text>
          <Text className="text-blue-600 mt-3">Telusuri</Text>
        </TouchableOpacity>
        <View className="mx-7 my-6">
          <Text className="text-gray-400 ">Tanggal Pembayaran</Text>
          <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-xl"></TextInput>
          <Text className="text-gray-400 mt-3 ">Total Pembayaran</Text>
          <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-xl"></TextInput>
          <Text className="text-gray-400 mt-3 ">Keterangan (Opsional)</Text>
          <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-xl"></TextInput>
          <TouchableOpacity className="py-5 mt-2">
            <View className="bg-blue-500 rounded-full py-3 items-center justify-center">
              <Text className="text-white">Kirim Bukti</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bukti;
