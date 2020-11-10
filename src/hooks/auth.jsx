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
    auth().signInWithEmailAndPassword(email, password)
    .then(async (doc) => {  
        
      try {
        const user = await firestore()
        .collection('usuario')
        .doc(doc.user.uid)
        .get();
        console.log("User data: ", user._data.data);
        setData({user: user._data.data});
        
        await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(user._data.data));
      } catch (e) {
        //Handle error
        console.error(e.message)
      }

      console.log("Logged in!");

    }).catch((error) => {
      //Handle error
      console.log(error.message)
    }); 
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

  const signUp = useCallback(async (data) => {
    auth().createUserWithEmailAndPassword(data.email, data.password)
    .then(async (login) => {   
      // remove user password information
      delete data.password;
      
      // Add user to database
      try {
        await firestore()
        .collection('usuario')
        .doc(login.user.uid)
        .set({data})
        .then(() => {
          console.log('Person added!');
        })
        .catch((error) => {
          console.log(error);
        })

         // set data state
        setData({user: data});

       
        // set internal storage
        await AsyncStorage.setItem('@MiauApp:user', JSON.stringify(data));
      
      } catch (e) {
        //Handle error
        console.error(e.message)
      }
    }).catch((error) => {
        //Handle error
        console.error(error.message)
    }); 
  },[setData]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading, signUp }}
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
