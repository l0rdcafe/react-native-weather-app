const API_KEY = "02c4f393fc03395eb2f52849d3ee647b";

const fetchWeather = async (lat, lon) => {
  try {
    let data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    );
    data = await data.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export default fetchWeather;
