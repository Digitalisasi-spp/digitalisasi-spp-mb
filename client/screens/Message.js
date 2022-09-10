import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import { TransactionStatus, Notification } from "../components";

const Message = () => {
  const [contentPage, setContentPage] = useState("notifikasi");

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#107BD0"
        barStyle="light-content"
      />
      <View className="py-7 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconFeather
            name="arrow-left"
            size={24}
            color="#000"
            className="inline-block"
          />
        </TouchableOpacity>
        <Text className="ml-4 text-xl font-semibold">Pesan</Text>
      </View>
      <View
        className="flex-row"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setContentPage("notifikasi")}
          className="flex-1 relative"
        >
          <Text
            className={`text-center ${
              contentPage === "notifikasi" ? "text-blue-500" : "text-gray-500"
            } font-semibold`}
          >
            Notifikasi
          </Text>
          {contentPage === "notifikasi" && (
            <View className="absolute -bottom-3 rounded-t-lg w-full left-0 bg-blue-500 h-1"></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setContentPage("transaksi")}
          className="flex-1 relative"
        >
          <Text
            className={`text-center  font-semibold ${
              contentPage === "transaksi" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Status Transaksi
          </Text>
          {contentPage === "transaksi" && (
            <View className="absolute -bottom-3 rounded-t-lg w-full left-0 bg-blue-500 h-1"></View>
          )}
        </TouchableOpacity>
      </View>
      {contentPage === "notifikasi" ? <Notification /> : <TransactionStatus />}
    </SafeAreaView>
  );
};

export default Message;
