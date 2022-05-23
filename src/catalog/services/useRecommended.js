import mock from "../../mocks.json";

const useRecommended = () => {
  return { get: async () => mock };
};

export default useRecommended;
