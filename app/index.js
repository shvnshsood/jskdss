import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/jk-logo-circle.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* {/* {lineaar gradient} */}

      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(0, 150, 136, 1)",
            "rgba(0, 150, 136, 0.7)",
            "rgba(0, 150, 136, 0.5)",
            "rgba(0, 150, 136, 0.2)",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        {/* content */}
        <Animated.View
          entering={FadeInDown.delay(600).springify()}
          style={styles.contentContainer}
        >
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            JKSDMA-DSS
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchLine}
          >
            Start Surveying
          </Animated.Text>
          <LinearGradient
            colors={["#155799", "#009688"]}
            style={styles.startBtnGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Pressable
              onPress={() => router.push("login")}
              style={styles.startBtn}
            >
              <Text style={styles.startText}>Login</Text>
            </Pressable>
          </LinearGradient>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: wp(50), // 50% of the screen width (or you can use fixed values like 200)
    height: hp(20),
    top: 300,
    left: 100,
    position: "absolute",
    zIndex: 999,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(100),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    gap: 14,
    alignItems: "center",
  },
  title: {
    fontWeight: theme.fontWeights.bold,
    colors: theme.colors.neutral(0.9),
    fontSize: hp(5),
  },
  punchLine: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
  },
  startBtnGradient: {
    marginBottom: 50,
    borderRadius: theme.radius.xl,
},
startBtn: {
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
    justifyContent: 'center',
    alignItems: 'center',
},
startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
},
});

export default WelcomeScreen;
