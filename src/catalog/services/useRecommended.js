const url = new URL("/3/movie/now_playing", process.env.REACT_APP_API);

url.searchParams.set("api_key", process.env.REACT_APP_API_KEY);
url.searchParams.set("language", "en-US");

const options = {
  mode: "cors",
  cache: "default",
  headers: new Headers({
    Host: "localhost",
  }),
};

export const useRecommended = () => {
  const get = ({ page }) => {
    url.searchParams.set("page", page || 1);

    return new Promise((resolve, reject) => {
      fetch(url, options).then((response) => {
        if (response.ok) {
          response.json().then((data) => resolve(data.results));
        } else {
          reject(`Fetching api error`);
        }
      });
    });
  };

  return { get };
};

export { useRecommended as default };
