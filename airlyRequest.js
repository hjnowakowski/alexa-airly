const axios = require("axios");
const config = require("./config.js");


module.exports = class AirlyRequest {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
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

  async getspeakableAirlyOutput() {
    const response = await axios.get(this.AIRLY_MEASUREMENT_API_ENDPOINT, this.apiParameters);

    return response.data.current.indexes[0].description +
        "the air pollution is equal to: " +
        response.data.current.indexes[0].value +
        "<break time=\"1s\"/>" +
        response.data.current.indexes[0].advice
  }
};
