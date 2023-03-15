import api, { ApiResponse } from "./axios";

export type ServiceType = "hair" | "beard" | "hairAndBeard";

export type BarberServicesPayload = {
  barberId: string;
};

export type Service = {
  id: string;
  type: ServiceType;
  date: string;
  hoursIds: number[];
  barberId: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
};

export const getBarberScheduledServices = async ({
  barberId,
}: BarberServicesPayload): Promise<ApiResponse> => {
  try {
    const { data } = await api.get(`barber-services/${barberId}`);
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

export type ClientServicesPayload = {
  clientId: string;
};

export const getClientScheduledServices = async ({
  clientId,
}: ClientServicesPayload): Promise<ApiResponse> => {
  try {
    const { data } = await api.get(`client-services/${clientId}`);
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

export type CreateServicePayload = {
  type: ServiceType;
  date: string;
  hoursIds: number[];
  barberId: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
};

export const createService = async ({
  type,
  date,
  hoursIds,
  barberId,
  clientId,
  clientName,
  clientPhone,
}: CreateServicePayload): Promise<ApiResponse> => {
  try {
    const { data } = await api.post(`services`, {
      type,
      date,
      hoursIds,
      barberId,
      clientId,
      clientName,
      clientPhone,
    });
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
