const axios = require("axios");
const config = require("./config.js");


module.exports = class AirlyRequest {
  constructor(url, lat, lng) {
    this.url = url;
    this.response = "null";
    this.INDEX_TYPE = "AIRLY_CAQI";
    this.MAX_DISTANCE_KM = 0.5;
    this.AIRLY_MEASUREMENT_API_ENDPOINT = "http://airapi.airly.eu/v2/measurements/nearest";
    this.apiKey = config.airly.apiKey;


    this.apiParameters = {
      headers: {
        'apikey': this.apiKey
      },
      params: {
        lat: lat,
        lng: lng,
        indexType: "AIRLY_CAQI",
        maxDistanceKM: 0.5
      },
    }
  }
  async getData() {
    const response = await axios.get('http://numbersapi.com/1');
    return response.data;
  }

  async getAirlyData() {
    const response = await axios.get(this.AIRLY_MEASUREMENT_API_ENDPOINT, this.apiParameters);

    return response.data;
  }
};
