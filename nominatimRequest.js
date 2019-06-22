const axios = require("axios");


module.exports = {
    async getGeoLocation(address) {
        const response = await axios.get("https://nominatim.openstreetmap.org", {
            params: {
                format: "json",
                addressdetails: 1,
                q: address.addressLine1 + " " + address.city,
                limit: 1
            },
        });
        console.log(response);
        return {lat: response.data[0].lat, lng: response.data[0].lon};
    }
};
