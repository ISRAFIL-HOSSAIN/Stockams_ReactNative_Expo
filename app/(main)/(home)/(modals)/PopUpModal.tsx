import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PopUpModal = ({
  visible,
  onRequestClose,
  children,
}: {
  visible: any;
  onRequestClose: any;
  children: any;
}) => {
  const [isModalVisible, setIsModalVisible] = useState(visible);

  // Function to handle modal closing (either by user action or externally)
  const handleClose = () => {
    setIsModalVisible(false);
    onRequestClose?.(); // Call the optional callback if provided
  };

  return (
    <Modal
      animationType="slide" // Choose a suitable animation type (optional)
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleClose} // Handle closing requests when outside the modal is tapped
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity className="" onPress={handleClose}>
          <AntDesign
            name="closecircle"
            size={32}
            color="red"
          />
        </TouchableOpacity>

        <View className="flex flex-col justify-center ">{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
  },
});

export default PopUpModal;
