// App.js

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text className="font-bold text-black 700 font-boldCG">
          Bold Text
        </Text>
        <Text className="font-normal text-black font-lightItalic text-lg" >
          Regular Text
        </Text>
        <Text className="font-light text-black 200 text-lg" >
          Light Text
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
