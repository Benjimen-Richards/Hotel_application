import axios from "axios";
const city_url = "https://rocky-chamber-59030.herokuapp.com/city/all";
export const fetch_citydata = async () => {
  const { data } = await axios.get(city_url);
  return {
    type: "citydata",
    payload: data,
  };
};
export const post_event = async (data) => {
  const posteddata = await axios.post("/event/add", data);
  return {
    type: "adduser",
    payload: posteddata.data,
  };
};
export const allusers = async (data) => {
  const users = await axios.get("/all");
  return {
    type: "allusers",
    payload: users.data,
  };
};
