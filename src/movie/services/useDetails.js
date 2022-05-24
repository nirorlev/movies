import mock from "../../mocks";

const useDetails = () => {
  return { get: async () => mock };
};

export { MockData } from '../../mocks';
export { useDetails as default};
