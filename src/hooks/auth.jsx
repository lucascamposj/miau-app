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
import messaging from '@react-native-firebase/messaging';

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

  const updateToken = useCallback(async () => {
    if(data){
      const tokenNotify = await messaging().getToken();

      await firestore()
        .collection('usuario')
        .doc(data.uid)
        .set({...data,
          tokenNotify
        });

      setData(data => ({...data,
        tokenNotify
      }))
    }
  },[setData, data]);

  const signIn  = useCallback(async (email, password) => {
    const doc = await auth().signInWithEmailAndPassword(email, password)
    
    const user = await firestore()
    .collection('usuario')
    .doc(doc.user.uid)
    .get();

    const tokenNotify = await messaging().getToken();

    await firestore()
      .collection('usuario')
      .doc(doc.user.uid)
      .set({...user.data(),
        uid: doc.user.uid,
        tokenNotify  
      })

    // set state
    setData({user: user._data});
    
    await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(user._data));
  }, [setData]);

  const signOut = useCallback(async () => {
    try{
      setData({});
      setTargetScreen("")
      await AsyncStorage.removeItem('@MiauApp:user');
      await auth().signOut()
    } catch(e){
      // Alert.alert("Erro ao sair!")
      console.log(e)
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
      .set({...data,
        uid: login.user.uid
      })
  
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
