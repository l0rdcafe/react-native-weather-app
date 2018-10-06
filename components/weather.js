import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import weatherConditions from "../utils/constants";

const styles = StyleSheet.create({
  weatherContainer: { flex: 1, backgroundColor: "#f7b733" },
  headerContainer: { flex: 1, alignItems: "center", justifyContent: "space-around", flexDirection: "row" },
  bodyContainer: { flex: 2, alignItems: "flex-start", justifyContent: "flex-end", paddingLeft: 25, marginBottom: 40 },
  tempText: { fontSize: 72, color: "#fff" },
  title: { fontSize: 60, color: "#fff" },
  subtitle: { fontSize: 24, color: "#fff" }
});

const Weather = ({ weather, temperature }) => (
  <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
    <View style={styles.headerContainer}>
      <MaterialCommunityIcons size={48} name={weatherConditions[weather].icon} color="#fff" />
      <Text style={styles.tempText}>{Math.round(temperature)}˚</Text>
    </View>
    <View style={styles.bodyContainer}>
      <Text style={styles.title}>{weatherConditions[weather].title}</Text>
      <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
    </View>
  </View>
);

Weather.propTypes = {
  weather: PropTypes.string,
  temperature: PropTypes.number.isRequired
};

Weather.defaultProps = {
  weather: "Clear"
};

export default Weather;
