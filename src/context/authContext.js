/* import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase-config";
import { getFirestore, doc, setDoc , collection,addDoc,getDocs  } from "firebase/firestore";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const signup = async (email, password, cedula, nombre, telefono, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const firestore = getFirestore();
      const docRef = doc(firestore, "Usuarios", user.uid);
  
      const userProfile = {
        Cedula: cedula,
        Nombre: nombre,
        Telefono: telefono,
        Username: username,
        Correo: email,
        displayName: nombre,
        userId: user.uid 
 
      }
  
      await setDoc(docRef, userProfile);
  
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
  
      await updateProfile(user, {
        displayName: nombre
      });
  
      setCurrentUser(user);
  
      console.log(`Usuario registrado: ${user.displayName}`);
      if (userProfile.hasOwnProperty('Username')) {
        console.log(`Usuario registrado: ${userProfile.Nombre}`);
      } else {
        console.log('La propiedad de nombre de usuario no está definida en el objeto UserProfile');
      }
      
    } catch (error) {
      console.error("Error al registrarse:", error);
      throw error;
    }
  };
  
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`Usuario conectado: ${userCredential.user.displayName}`);
        return user;
      })
      .catch((error) => {
        console.error("Error usuario conectado:", error);
        throw error;
      });
  };
  
  
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  
  const addPost = async (text, currentUser) => {
    try {
      const firestore = getFirestore();
      const postCollection = collection(firestore, "post");
      const post = {
        text: text,
        author: currentUser.displayName,
        authorId: currentUser.uid,
      };
      await addDoc(postCollection, post);
      console.log("Publicación añadida con éxito");
    } catch (error) {
      console.error("Error al añadir post:", error);
      throw error;
    }
  };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);


  useEffect(() => {
    const firestore = getFirestore();
    const postCollection = collection(firestore, "post");
    const getPosts = async () => {
      const querySnapshot = await getDocs(postCollection);
      const postsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(postsData);
    };
    getPosts();
  }, []);


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        currentUser,
        loading,
        loginWithGoogle,
        resetPassword,
        addPost,
        posts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


 */

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase-config";
import { getFirestore, doc, setDoc , collection,addDoc  } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const signup = async (email, password, cedula, nombre, telefono, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const firestore = getFirestore();
      const docRef = doc(firestore, "Usuarios", user.uid);
  
      const userProfile = {
        Cedula: cedula,
        Nombre: nombre,
        Telefono: telefono,
        Username: username,
        Correo: email,
        displayName: nombre,
        userId: user.uid 
 
      }
  
      await setDoc(docRef, userProfile);
  
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
  
      await updateProfile(user, {
        displayName: nombre
      });
  
      setCurrentUser(user);
  
      console.log(`Usuario registrado: ${user.displayName}`);
      if (userProfile.hasOwnProperty('Username')) {
        console.log(`Usuario registrado: ${userProfile.Nombre}`);
      } else {
        console.log('La propiedad de nombre de usuario no está definida en el objeto UserProfile');
      }
      
    } catch (error) {
      console.error("Error al registrarse:", error);
      throw error;
    }
  };
  
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`Usuario conectado: ${userCredential.user.displayName}`);
        return user;
      })
      .catch((error) => {
        console.error("Error usuario conectado:", error);
        throw error;
      });
  };
  
  
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const firestore = getFirestore();
    const postCollection = collection(firestore, "post");
    const unsubscribe = onSnapshot(postCollection, (querySnapshot) => {
      const postsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(postsData);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const addPost = async (text, currentUser) => {
    try {
      const firestore = getFirestore();
      const postCollection = collection(firestore, "post");
      const post = {
        text: text,
        author: currentUser.displayName,
        authorId: currentUser.uid,
        createdAt: new Date(), 
      };
      await addDoc(postCollection, post);
      console.log("Publicación añadida con éxito");
    } catch (error) {
      console.error("Error al añadir post:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        currentUser,
        loading,
        loginWithGoogle,
        resetPassword,
        addPost,
        posts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
