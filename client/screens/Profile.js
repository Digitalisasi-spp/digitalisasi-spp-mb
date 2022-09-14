import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import { ProfileData, ModalWrapper } from "../components";

const Profile = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <ModalWrapper visible={visible} setVisible={setVisible} />
      <View
        style={{ zIndex: 999 }}
        className="w-full flex-col absolute items-center top-14 justify-center"
      >
        <Image
          source={require("../assets/images/mainprofile.png")}
          className="w-[130px] h-[130px]"
        />
      </View>
      <ScrollView className="bg-white flex-1 mt-[130px]  rounded-t-[40px]">
        <View className="mt-16 items-center">
          <Text className="text-2xl font-bold">Eireinei Fangidae</Text>
          <Text className="text-[14px] text-gray-400 mt-2">Kelas 12</Text>
          <Text className="text-[14px] text-gray-400 mt-1">
            Jurusan Teknik Komputer Jaringan
          </Text>
          <Text className="text-[14px] text-gray-400 mt-1">
            Tahun Ajaran 2020/2023
          </Text>
        </View>
        <View className="w-full mt-7">
          <ProfileData title="Nis Siswa" data="6915">
            <IconFeather name="user" size={25} color="#555" />
          </ProfileData>
          <ProfileData title="Email" data="wendi.6915@ski.sch.id">
            <IconFeather name="mail" size={25} color="#555" />
          </ProfileData>
          <ProfileData title="No Hp" data="8953-8761-4518">
            <IconFeather name="smartphone" size={25} color="#555" />
          </ProfileData>
          <ProfileData title="Alamat" data="Jalan Pramuka,Pontianak">
            <IconFeather name="map-pin" size={25} color="#555" />
          </ProfileData>
        </View>
        <View className="mt-7 px-7">
          <Text className="text-md font-bold">Kartu Pelajar</Text>
          <Image
            source={require("../assets/images/testkp.png")}
            className="w-full h-[170px] mt-5 rounded-md"
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          className="flex-row items-center px-7 py-5 "
          onPress={() => setVisible(true)}
        >
          <IconFeather name="log-out" size={25} color="#555" />

          <Text className="text-md ml-2 font-semibold text-[#107BD0]">
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
