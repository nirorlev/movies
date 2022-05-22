import mock from "../../mocks/topTatedMovies.json";

const useRecommended = () => {
  return { get: async () => mock };
};

export default useRecommended;
