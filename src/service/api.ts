import { API } from ".";
export const api = {
  insert: {
    siturations: <T>(data: T) => API.post("situations", data),
  },
  list: {
    siturations: async <T>() => {
      const { data } = await API.get<T>("situations");
      return data;
    },
  },
  delete: {
    siturations: async (id: string) => API.delete(`situations/${id}`),
  },
};
