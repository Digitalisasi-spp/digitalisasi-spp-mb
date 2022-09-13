import { View, Text, Modal, TouchableOpacity } from "react-native";

const ModalWrapper = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View
        className="flex-1 justify-center items-center"
        style={{ backgroundColor: "rgba(12,12,12,0.6)" }}
      >
        <View className="bg-white py-5 px-5 w-[85%] relative rounded-md">
          <Text className="font-semibold text-xl text-center">
            Ingin logout?
          </Text>
          <Text className="text-center text-[12px] leading-5 mt-2 font-normal text-gray-700">
            Pastikan semua aktivitas anda sudah selesai ya Terima kasih telah
            mengakses Feedo!
          </Text>
          <View className="mt-5 flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => setVisible(false)}
              className="bg-blue-dark py-3 w-[48%] rounded-full"
            >
              <Text className="text-white text-md text-center font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] border-2 py-3 border-red-500 rounded-full">
              <Text className="text-center text-md text-red-500 font-semibold">
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;
