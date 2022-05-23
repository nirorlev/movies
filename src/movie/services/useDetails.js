import mock from "../../mocks.json";

const useDetails = () => {
  return { get: async () => mock };
};

export default useDetails;
