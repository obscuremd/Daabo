import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Auth from './src/Screens/Auth';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, updateCurrentUser } from 'firebase/auth';
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
    <View style={styles.container}>
      { user ?
          <View>
            <Text>logged in</Text>
            <TouchableOpacity onPress={logOut}>
              <Text>Log out</Text>
            </TouchableOpacity>
          </View>
              :
        <View style={styles.container}>
          <Auth/>
        </View>
      }
    </View>

     

        // 
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
