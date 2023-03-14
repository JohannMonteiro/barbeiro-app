import { ReactNode, useState, useEffect } from "react";
import { Alert } from "react-native";
import { createContext } from "use-context-selector";
import {
  signIn,
  SignInPayload,
  signUp,
  SignUpPayload,
  User,
} from "../requests/auth";
import {
  createService,
  CreateServicePayload,
  getBarberScheduledServices,
  getClientScheduledServices,
  Service,
} from "../requests/service";
import { getAllBarbers, getAllClients } from "../requests/user";

interface ContextType {
  login: (params: SignInPayload, cb: () => void) => Promise<void>;
  register: (params: SignUpPayload, cb: () => void) => Promise<void>;
  currentUser: User | null;
  clients: User[];
  barbers: User[];
  clientServices: Service[];
  barberServices: Service[];
  createNewService: (service: CreateServicePayload, cb: () => void) => Promise<void>;
  selectBarber: (user: User, cb: () => void) => void;
  selectedBarber: User | null;
  selectHour: (
    { date, id }: { id: number; date: string },
    cb: () => void
  ) => void;
  selectedHour: { id: number; date: string } | null;
}

export const Context = createContext({} as ContextType);

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<User | null>(null);
  const [barbers, setBarbers] = useState<User[]>([]);
  const [clients, setClients] = useState<User[]>([]);
  const [barberServices, setBarberServices] = useState<Service[]>([]);
  const [clientServices, setClientServices] = useState<Service[]>([]);
  const [selectedHour, setSelectedHour] = useState<{
    id: number;
    date: string;
  } | null>(null);

  const selectHour = (
    { date, id }: { id: number; date: string },
    cb: () => void
  ) => {
    setSelectedHour({ date, id });
    cb();
  };

  const selectBarber = (user: User, cb: () => void) => {
    setSelectedBarber(user);
    cb();
  };

  const createNewService = async (service: CreateServicePayload, cb: () => void) => {
    const { data, status } = await createService(service);
    if (status === 200) {
      setClientServices([...clientServices, data]);
      Alert.alert(
        "",
        'Novo serviço criado com sucesso!',
        [
          {
            text: "Fechar",
            onPress: () => cb(),
          },
        ]
      );
    } else {
      Alert.alert("", "Erro ao criar serviço");
    }
  };

  const login = async ({ cpf, type }: SignInPayload, cb: () => void) => {
    const { data, status } = await signIn({
      cpf,
      type,
    });
    if (status === 200) {
      setCurrentUser(data);
      cb();
    } else {
      Alert.alert("", "Credenciais inválidas");
    }
  };

  const register = async (
    { cpf, name, phone, type }: SignUpPayload,
    cb: () => void
  ) => {
    const { data, status } = await signUp({
      cpf,
      type,
      name,
      phone,
    });
    if (status === 200) {
      setCurrentUser(data);
      cb();
    } else {
      Alert.alert("", "Dados inválidas");
    }
  };

  useEffect(() => {
    const fetchBarbers = async () => {
      const { data } = await getAllBarbers();
      setBarbers(data);
    };
    fetchBarbers();

    const fetchClients = async () => {
      const { data } = await getAllClients();
      setClients(data);
    };
    fetchClients();
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.type === "barber") {
        const fetchBarberServices = async () => {
          const { data } = await getBarberScheduledServices({
            barberId: currentUser.id,
          });
          setBarberServices(data);
        };
        fetchBarberServices();
      } else {
        const fetchClientServices = async () => {
          const { data } = await getClientScheduledServices({
            clientId: currentUser.id,
          });
          setClientServices(data);
        };
        fetchClientServices();
      }
    }
  }, [currentUser]);

  return (
    <Context.Provider
      value={{
        login,
        register,
        currentUser,
        clients,
        barbers,
        barberServices,
        clientServices,
        createNewService,
        selectBarber,
        selectedBarber,
        selectHour,
        selectedHour,
      }}
    >
      {children}
    </Context.Provider>
  );
};
