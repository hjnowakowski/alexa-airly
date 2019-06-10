const axios = require("axios");
const config = require("./config.js");


module.exports = class AirlyRequest {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.response = "null";
    this.AIRLY_MEASUREMENT_API_ENDPOINT = "http://airapi.airly.eu/v2/measurements/nearest";
    this.apiKey = config.airly.apiKey;


    this.apiParameters = {
      headers: {
        'apikey': this.apiKey
      },
      params: {
        lat: this.lat,
        lng: this.lng,
      },
    }
  }

  async getAirlyData() {
    console.log(this.apiParameters);
    const response = await axios.get(this.AIRLY_MEASUREMENT_API_ENDPOINT, this.apiParameters);
    return response.data;
  }
};
