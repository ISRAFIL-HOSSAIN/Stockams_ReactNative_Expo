//import liraries
import PaymentHeader from "@/components/admin/header/PaymentHeader";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const myPayment: React.FC = () => {
  const [tab, setTab] = useState("all");
  const [selectedData, setSelectedData] = useState<{
    x: number;
    y: number;
    value: number;
  } | null>(null);
  // Sample data for demonstration purposes
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [400, 300, 250, 400, 350, 500, 450, 600, 550, 700, 650, 600],
        color: (opacity = 1) => `rgba(220, 225, 2, ${opacity})`, // Adjust color as needed
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 2, // Number of decimal places for Y-axis labels
    color: (opacity = 1) => `rgba(220, 225, 2,${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "3",
      stroke: "#007BFF",
    },
    useShadowColorFromDataset: true,
  };
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (_, gestureState) => {
          const xCoordinate = gestureState.x0;
          const yCoordinate = gestureState.y0;

          // Find the closest data point based on the x-coordinate
          const index = Math.round(
            (xCoordinate / Dimensions.get("window").width) *
              (data.labels.length - 1)
          );
          const value = data.datasets[0].data[index];

          setSelectedData({ x: xCoordinate, y: yCoordinate, value });
        },
        onPanResponderRelease: () => {
          setSelectedData(null);
        },
      }),
    [data]
  );

  return (
    <View style={{}}>
      <Stack.Screen
        options={{
          header: () => <PaymentHeader tab={tab} setTab={setTab} />,
        }}
      />
      <ScrollView>
        <View {...panResponder.panHandlers}>
          <LineChart
            data={data}
            width={500}
            height={200}
            chartConfig={chartConfig}
            bezier={true}
            yAxisLabel=""
            withDots={false}
            withInnerLines={false}
            withVerticalLines={false}
            withHorizontalLabels={false}
            fromZero={true}
          />
          {selectedData && (
            <View
              style={[
                styles.tooltip,
                { top: selectedData.y, left: selectedData.x },
              ]}
            >
              <Text>{`${selectedData.value}`}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default myPayment;
