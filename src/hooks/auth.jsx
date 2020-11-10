import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const user = await AsyncStorage.getItem('@MiauApp:user');
      if (user) {
        setData({user: JSON.parse(user) });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn  = useCallback(async (email, password) => {
    try {
      const {data: user} = await auth().signInWithEmailAndPassword(email, password);
      setData({user});
      await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(user));

      console.log("User data: ", response.data);
      console.log("Logged in!");
    } catch (e) {
      console.log("Logged failed!")
      console.error(e.message)
    }
  }, [setData]);

  const signOut = useCallback(() => {
    auth().signOut().then(async () => {
      setData({});
      await AsyncStorage.removeItem('@MiauApp:user');
      console.log('User signed out!');
    });
  },[setData])

  const updateUser = useCallback(
    async (user) => {
      await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(user));

      setData({
        user
      });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
