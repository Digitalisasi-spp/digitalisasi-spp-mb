import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  SectionList,
} from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import { UploadModal } from "../components";
import DropDownPicker from "react-native-dropdown-picker";

const Bukti = () => {
  const [visible, setVisible] = useState(false);
  const [uploadFiles, setUploadFiles] = useState([]);

  return (
    <SafeAreaView className="flex-1 py-5 bg-white">
      <UploadModal
        visible={visible}
        setUploadFiles={setUploadFiles}
        setVisible={setVisible}
      />
      <ScrollView>
        <Text className=" py-5 text-center text-xl font-semibold">
          Kirim Bukti Pembayaran
        </Text>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          className="mx-7 bg-gray-100 rounded-lg items-center justify-center py-7 mt-4"
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
        <View className="mx-7 mt-10">
          <Text className="text-gray-500 ">Tanggal Pembayaran</Text>
          <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-lg"></TextInput>
          <Text className="text-gray-500 mt-3 ">Total Pembayaran</Text>
          <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-lg"></TextInput>
          <Text className="text-gray-500 mt-3 ">Keterangan (Opsional)</Text>
          <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-lg"></TextInput>
          <TouchableOpacity className="py-3 mt-7  bg-blue-500 rounded-full items-center justify-center">
            <Text className="text-white text-center font-bold">
              Kirim Bukti
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bukti;
