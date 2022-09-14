import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";

const UploadModal = ({ visible, setVisible }) => {
  const [datas, setDatas] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setDatas([...datas, result.uri]);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View className="w-full bg-gray-200 rounded-md py-2 px-3">
        <Text className="font-medium text-gray-800">
          {item.substring(0, 80)}
        </Text>
      </View>
    );
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View
        className="flex-1 flex-row items-end relative"
        style={{ backgroundColor: "rgba(12,12,21,0.6)" }}
      >
        <TouchableOpacity
          onPress={() => setVisible(false)}
          className="absolute top-5 right-5"
        >
          <IconFeather name="x" size={26} color="#fff" />
        </TouchableOpacity>
        <View className="w-full rounded-t-xl bg-white py-5 px-5">
          <Text className="font-bold text-xl text-center capitalize">
            Upload Your Files
          </Text>
          <TouchableOpacity
            onPress={() => pickImage()}
            className="bg-[#107BD0] relative mt-5 py-3 rounded-md w-full"
          >
            <View className="w-full flex-row justify-center items-center">
              <IconFeather name="plus" size={24} color="#fff" />
              <Text className="ml-2 text-center text-white text-[15px] font-medium">
                Pilih File
              </Text>
            </View>
            <View className="my-5">
              {datas.length > 0 && (
                <FlatList
                  data={datas}
                  keyExtractor={(item) => item}
                  renderItem={renderItem}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full py-3 bg-blue-500 mt-10">
            <Text className="text-center text-white font-medium">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UploadModal;
