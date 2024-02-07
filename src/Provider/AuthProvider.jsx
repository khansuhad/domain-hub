import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  // create user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sing in with google
  const singInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sing in with Github
  const singInWithGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  // logout
  const logoutUser = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    isLoading,
    createUser,
    loginUser,
    singInWithGoogle,
    singInWithGithub,
    resetPassword,
    logoutUser,
  };



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setIsLoading(false);

      if (currentUser) {
        axios
          .post("https://localhost:3000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token respons", res.data);
          });
      } else {
        axios
          .post("https://localhost:3000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token respons", res.data);
          });
      }

      // store userInfo in state of redux/Abu bakar
      const userInfo = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        phoneNumber: currentUser.phoneNumber,
        accessToken: currentUser.accessToken,
      }
      dispatch(addUser(userInfo));
      // store userInfo in state of redux/Abu bakar
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;