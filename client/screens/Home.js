import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IconFeather from "react-native-vector-icons/Feather";

const pageMenu = [
  {
    title: "Upload",
    page: "upload",
    icon: <IconFeather name="camera" size={24} color="#fff" />,
  },
  {
    title: "Upload",
    page: "proof",
    icon: <IconFeather name="clipboard" size={24} color="#fff" />,
  },
  {
    title: "Bayar",
    page: "payment",
    icon: <IconFeather name="credit-card" size={24} color="#fff" />,
  },
  {
    title: "Laporan",
    page: "report",
    icon: <IconFeather name="alert-circle" size={24} color="#fff" />,
  },
];

const Home = () => {
  return (
    <ScrollView
      showVerticalScrollIndicator={false}
      className="flex-1 bg-white px-6"
    >
      <View className="w-full border-b border-gray-300 pt-7 pb-4">
        <Image
          source={require("../assets/images/feedo.png")}
          resizeMode="contain"
          className="w-[140px]"
        />
      </View>
      <View className="w-full flex-row justify-between items-center mt-5">
        <View className="flex-1">
          <Text className="text-blue-400 font-semibold text-lg">
            Selamat datang,
          </Text>
          <Text className="text-blue-500 font-bold text-xl">
            Eirenei Fangidae,
          </Text>
        </View>
        <Image
          source={require("../assets/images/profile.png")}
          className="w-[60px]"
          resizeMode="contain"
        />
      </View>
      <View className="w-full mt-7 bg-gray-100 rounded-lg py-5 px-4 border border-slate-300">
        <Text className="font-medium text-gray-500 text-md">
          Nama : Eirenei Fangidae
        </Text>

        <Text className="font-medium mt-1 text-gray-500 text-md">
          NIS : 6892
        </Text>
        <Text className="font-medium mt-1 text-gray-500 text-md">
          Kelas : XIITKJ2
        </Text>
        <Text className="font-medium mt-1 text-gray-500 text-md">
          Tahun Ajaran : 2022 / 2023
        </Text>
      </View>
      <View className="w-full rounded-lg mt-4 bg-[#EEFCFF] border-2 border-blue-300 py-3 px-4">
        <Text className="font-bold text-lg text-center">Harus ingat!!</Text>
        <Text className="font-medium text-sm text-center mt-2">
          SPP wajib dilunasi setiap bulan sebelum tanggal 15 dan menjelang
          ulangan umum / terima rapor. Jika mengalami kesulitan untuk pembayaran
          SPP dapat dikonsultasikan ke pihak sekolah
        </Text>
      </View>
      <View className="flex-row justify-between items-center mt-7">
        {pageMenu.map((item, idx) => (
          <View className="w-[22%]" key={idx}>
            <TouchableOpacity className="w-full py-3 rounded-md bg-blue-500 flex-row items-center justify-center">
              {item.icon}
            </TouchableOpacity>
            <Text className="text-sm text-center font-semibold capitalize mt-2">
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
