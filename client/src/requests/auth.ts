import api from "./axios";

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

export const welcomeApi = async () => {
  const { data } = await api.get("api");
  return data;
};

export const signIn = async ({ cpf, type }: SignInPayload): Promise<User> => {
  console.log(type);

  const {data} = await api.post(
    `sign-in/${cpf}`,
    {},
    {
      params: {
        type,
      },
    }
  );
  return data as any;
};

export type SignUpPayload = {
  cpf: string;
  type: UserType;
  name: string;
  phone: string;
};

export const signUp = async ({
  cpf,
  name,
  phone,
  type,
}: SignUpPayload): Promise<User> =>
  await api.post(`/sign-up/${cpf}`, {
    query: {
      type,
    },
    body: {
      name,
      phone,
    },
  });
