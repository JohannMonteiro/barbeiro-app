import api, { ApiResponse } from "./axios";

export const getAllBarbers = async (): Promise<ApiResponse> => {
  try {
    const { data } = await api.get("barbers");
    return {
      data,
      status: 200,
    };
  } catch (err: any) {
    return {
      data: err.response.data as any,
      status: err.response.status as number,
    };
  }
};

export const getAllClients = async (): Promise<ApiResponse> => {
    try {
      const { data } = await api.get("clients");
      return {
        data,
        status: 200,
      };
    } catch (err: any) {
      return {
        data: err.response.data as any,
        status: err.response.status as number,
      };
    }
  };
