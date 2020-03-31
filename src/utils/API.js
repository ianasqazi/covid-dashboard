import axios from "axios";

export default {
  // Gets latest global count
  globalCount: function() {
    return axios.get("https://covidapi.info/api/v1/global");
  }
};
