import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

// Correct usage of createContext
const AuthContext = createContext();
const auth = getAuth();
const GoogleProvider = new  GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }  

  const signupWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
  }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
      setUser(currentuser);
      setLoading(false);
    })
    return () => {
      return unsubscribe()
    }
  })

  const authInfo = {
    // Define auth state or functions here
    user,
    loading,
    createUser,
    signupWithGmail,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}> 
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
