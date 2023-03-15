import { ApiResponse } from "../requests/axios";

export const errorCatch = async (
  cb: () => Promise<ApiResponse>
): Promise<ApiResponse> => {
  try {
    return await cb();
  } catch (err: any) {
    console.log('====================================');
    console.log(err.response.data);
    console.log('====================================');
    return {
      data: err.response.data as any,
      status: err.response.status as number,
    };
  }
};
