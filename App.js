import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Auth from './src/Screens/Auth';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, updateCurrentUser } from 'firebase/auth';
import Navigation from './src/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/Store/Store';
import { auth } from './config/firebaseConfig';



export default function App() {

  const [user, setUser] = useState({})

  const logOut = async () => {
    try {
      await signOut(auth); // Call signOut without passing user object
      setUser(null); // Reset user state after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);


  return (
    <Provider store={store}>

      <NavigationContainer >
          {user ? <Navigation /> : <View style={styles.container}><Auth/></View>}
          {/* <Navigation/> */}
      </NavigationContainer>
    </Provider>
     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
