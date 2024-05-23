import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// Ensure your API key is placed here
const TMDB_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return error;
  }
};
