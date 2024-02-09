import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function commonModal({
  isOpen,
  setIsOpen,
  children,
  subChildren,
}: {
  isOpen?: any;
  setIsOpen?: any;
  children?: any;
  subChildren?: any;
}) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = ["25%", "48%", "75%"];

  //   function handlePresentModal() {

  //     setTimeout(() => {
  //       setIsOpen(true);
  //     }, 100);
  //   }
  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    }
  }, [isOpen]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>{children}</View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 20 }}
          onDismiss={() => setIsOpen(false)}
        >
          <View className="">{subChildren}</View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: Dimensions.get("window").width * 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});
