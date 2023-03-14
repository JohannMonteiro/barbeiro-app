import api, { ApiResponse } from "./axios";

type UserType = "barber" | "client";

export type SignInPayload = {
  cpf: string;
  type: UserType;
};

export type User = {
  id: string;
  cpf: string;
  type: UserType;
  name: string;
  phone: string;
};

export const signIn = async ({
  cpf,
  type,
}: SignInPayload): Promise<ApiResponse> => {
  try {
    const { data } = await api.post(
      `sign-in/${cpf}`,
      {},
      {
        params: {
          type,
        },
      }
    );
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

export type SignUpPayload = {
  cpf: string;
  type: UserType;
  name: string;
  phone: string;
};

export const signUp = async ({
  cpf,
  type,
  name,
  phone,
}: SignUpPayload): Promise<ApiResponse> => {
  try {
    const { data } = await api.post(
      `sign-up/${cpf}`,
      {
        name,
        phone,
      },
      {
        params: {
          type,
        },
      }
    );
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
