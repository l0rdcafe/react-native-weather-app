import React from "react";
import { Text, View, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import Weather from "./components/weather";
import fetchWeather from "./utils/open-weather-api";
import getLoc from "./utils/geolocation";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  errorContainer: { justifyContent: "center", alignItems: "center" },
  errorText: { color: "#c91b26", fontSize: 24 },
  loadingContainer: { justifyContent: "center", alignItems: "center" }
});

class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };
  componentDidMount() {
    getLoc(async pos => {
      const data = await fetchWeather(pos.coords.latitude, pos.coords.longitude);
      this.setState({
        temperature: data.main.temp,
        weatherCondition: data.weather[0].main,
        isLoading: false
      });
    }, this.setState);
  }
  render() {
    const { isLoading, weatherCondition, temperature, error } = this.state;
    return (
      <View style={[styles.container, isLoading && styles.loadingContainer, error && styles.errorContainer]}>
        {isLoading ? <ActivityIndicator /> : <Weather weather={weatherCondition} temperature={temperature} />}
        {error && <Text style={styles.errorText}>{error}</Text>}
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

export default App;
