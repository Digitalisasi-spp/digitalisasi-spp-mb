import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  SectionList,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import { UploadModal } from "../components";
import SelectDropdown from "react-native-select-dropdown";

const Bukti = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [uploadFiles, setUploadFiles] = useState([]);
  return (
    <SafeAreaView className="flex-1 bg-white">
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
          <View className="">
            <Text className="text-gray-500">Pilih Bank</Text>
            <SelectDropdown
              buttonStyle={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#ddd",
                width: "100%",
                marginTop: 10,
              }}
              buttonTextStyle={{
                fontSize: 15,
              }}
              defaultButtonText="Pilih Bank"
              className="w-full"
              data={["BCA", "MAYBANK", "MANDIRI", "PERMATA"]}
            />
          </View>
          <View className="mt-3 mb-3">
            <Text className="text-gray-500 ">Tanggal Pembayaran</Text>
            <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-lg"></TextInput>
          </View>

          <View className="mt-2 mb-3">
            <Text className="text-gray-500">Total Pembayaran</Text>
            <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-lg"></TextInput>
          </View>
          <View className="mt-2">
            <Text className="text-gray-500">Keterangan (Opsional)</Text>
            <TextInput className="mt-2 p-2 border-gray-200 border-2 rounded-lg"></TextInput>
          </View>
          <TouchableOpacity className="py-3 mt-7  bg-blue-500 rounded-full items-center justify-center">
            <Text className="text-white text-center font-bold">
              Kirim Bukti
            </Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Text className="text-center text-gray-400 mt-5 mb-5 text-sm">
              Back
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bukti;
