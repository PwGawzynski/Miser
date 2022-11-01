import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './Components/Organisms/DrawerMenu';
import { LoginPage } from './Components/Pages/LoginPage';
import { RegisterAccount } from './Components/Pages/RegisterAccount';

export interface LoginData {
  login: string;
  password: string;
}

export interface AuthContentObject {
  login: (data: LoginData) => void;
  logOut: () => void;
}
export interface SetUpNewAccount {
  save: (data: LoginData) => void;
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

export const AccountSetter = createContext<SetUpNewAccount | undefined>(
  undefined,
);

export const Stack = createNativeStackNavigator<AuthRootStackParamList>();

export type AuthRootStackParamList = {
  LoginPage: undefined;
  Auth: undefined;
  RegisterPage: undefined;
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

  const [newAccount, newAccountDispatch] = useReducer(
    (prevState: LoginData, newData: LoginData) => {
      console.log(newData, 'elo');
      return newData;
    },
    { login: 'user', password: '123' },
  );

  useEffect(() => {
    console.log('RERENDER');
    console.log(newAccount, 'nA');
    // newAccountDispatch({ login: 'user', password: '123' });
    // eslint-disable-next-line @typescript-eslint/require-await
    void (async () => {
      dispatch(OperationType.logOut);
    })();
  }, [newAccount]);

  const authProvider = useMemo(
    () => ({
      login: (data: LoginData) => {
        const { login, password } = data;
        console.log(login, newAccount.login);
        console.log(password, newAccount.password);
        login === newAccount.login && password === newAccount.password
          ? dispatch(OperationType.login)
          : dispatch(OperationType.logOut);
      },
      logOut: () => {
        dispatch(OperationType.logOut);
      },
    }),
    [newAccount],
  );

  const newAccountProvider = useMemo(
    () => ({
      save: (data: LoginData) => newAccountDispatch(data),
    }),
    [],
  );

  return (
    <AuthContextProvider.Provider value={authProvider}>
      <AccountSetter.Provider value={newAccountProvider}>
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
              <>
                <Stack.Screen
                  name={'LoginPage'}
                  options={{ headerShown: false }}
                >
                  {(props) => <LoginPage {...props} />}
                </Stack.Screen>

                <Stack.Screen
                  name={'RegisterPage'}
                  options={{
                    headerShown: false,
                  }}
                >
                  {(props) => <RegisterAccount {...props} />}
                </Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AccountSetter.Provider>
    </AuthContextProvider.Provider>
  );
}
