import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Google sign In
  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Github sign in
  const githubSign = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //   Create a user account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Signed in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Get users profile
  const updateUserData = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);


      // Get and set token
    if (loggedInUser) {
      axios.post('http://localhost:5000/jwt', { email: loggedInUser.email })
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('jwt-access-token', data.data.token);
        })
        .catch(error => {
          console.error('Error while obtaining token:', error);
          // Handle error appropriately
        });
    } else {
      // Clear access token
      localStorage.removeItem('jwt-access-token');
    }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOutUser,
    googleSign,
    githubSign,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
