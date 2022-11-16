import axios from "axios";

const request = axios.create({
  baseURL: "https://6333cc47433198e79dc95f94.mockapi.io/",
});
export const getVideos = async () => {
  try {
    const response = await request.get("spotify-home");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
