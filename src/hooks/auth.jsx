import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [targetScreen, setTargetScreen] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState({});
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
    const doc = await auth().signInWithEmailAndPassword(email, password)
    
    const user = await firestore()
    .collection('usuario')
    .doc(doc.user.uid)
    .get();

    // set UID
    user._data.data.uid = doc.user.uid

    // set state
    setData({user: user._data.data});
    
    await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(user._data.data));
  }, [setData]);

  const signOut = useCallback(async () => {
    try{
      await auth().signOut()
      setData({});
      setTargetScreen("")
      await AsyncStorage.removeItem('@MiauApp:user');
    } catch(e){
      Alert.alert("Erro ao sair!")
      console.error(e)
    }
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

  const signUp = useCallback(async (data) => {
    try {
      const login = await auth().createUserWithEmailAndPassword(data.email, data.password)
      
      // remove user password information
      delete data.password;
      
      // Add user to database
 
      await firestore()
      .collection('usuario')
      .doc(login.user.uid)
      .set({data})
  
      // set UID to data
      data.uid = login.user.uid

        // set data state
      setData({user: data});

      // set internal storage
      await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(data));
      
    } catch(error) {
        //Handle error
        console.error(error.message)
    }; 
  },[setData]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading, signUp, targetScreen, setTargetScreen, selectedAnimal, setSelectedAnimal }}
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
