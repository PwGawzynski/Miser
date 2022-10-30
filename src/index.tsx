import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './Components/Organisms/DrawerMenu';
import { LoginPage } from './Components/Pages/LoginPage';

export interface LoginData {
  login: string;
  password: string;
}

export interface AuthContentObject {
  login: (data: LoginData) => void;
  logOut: () => void;
}

export interface AuthStateI {
  signIn: boolean;
}

export enum OperationType {
  login,
  logOut,
}
export const AuthContextProvider = createContext<AuthContentObject | undefined>(
  undefined,
);

const Stack = createNativeStackNavigator<AuthRootStackParamList>();

export type AuthRootStackParamList = {
  LoginPage: undefined;
  Auth: undefined;
};

export default function App(): JSX.Element {
  const [authState, dispatch] = useReducer(
    (prev: AuthStateI, operation: OperationType) => {
      switch (operation) {
        case OperationType.login:
          return {
            ...prev,
            signIn: true,
          };
        case OperationType.logOut:
          return {
            ...prev,
            signIn: false,
          };
      }
    },
    {
      signIn: false,
    },
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/require-await
    void (async () => {
      dispatch(OperationType.logOut);
    })();
  }, []);

  const authProvider = useMemo(
    () => ({
      login: (data: LoginData) => {
        const { login, password } = data;
        login === 'user' && password === '123'
          ? dispatch(OperationType.login)
          : dispatch(OperationType.logOut);
      },
      logOut: () => {
        dispatch(OperationType.logOut);
      },
    }),
    [],
  );

  return (
    <AuthContextProvider.Provider value={authProvider}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          {authState.signIn ? (
            <Stack.Screen
              name={'Auth'}
              options={{
                headerShown: false,
              }}
            >
              {() => <DrawerMenu />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name={'LoginPage'} options={{ headerShown: false }}>
              {() => <LoginPage />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider.Provider>
  );
}
