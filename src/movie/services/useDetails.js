import mock from "../../mocks/topTatedMovies.json";

const useDetails = () => {
  return { get: async () => mock };
};

export default useDetails;
