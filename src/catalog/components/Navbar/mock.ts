import { DeviceData } from "./type";

const data: { desktop: DeviceData; mobile: DeviceData } = {
  desktop: {
    '/': "Home",
    "tv-shows": "Tv Shows",
    movies: "Movies",
    top: "Top",
    "my-list": "My List",
  },
  mobile: { "tv-shows": "Tv Shows", movies: "Movies", "my-list": "My List" },
};

export default data;
