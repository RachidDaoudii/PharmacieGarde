import axios from "axios";
const fetchData = async () => {
  try {
    const url = "https://pharmacies-de-garde-nc.p.rapidapi.com/gardes";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fd5893b6cdmsh1056d7076161dfap171e77jsn208cc5e13d7f",
        "X-RapidAPI-Host": "pharmacies-de-garde-nc.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.text();
    const t = JSON.parse(result);
    return t;
  } catch (error) {
    return error;
  }
};

export default fetchData;
