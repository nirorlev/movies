import mock from "../../mocks";

export const useRecommended = () => {
  return { get: async () => mock };
};

export { MockData } from '../../mocks';
export { useRecommended as default};
