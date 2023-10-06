import { createContext, useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContex=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    //For Register
     const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
     }
     //Current state find
     useEffect(()=>{
        const unScribe=onAuthStateChanged(auth,currentUser =>{
            console.log('User Current',currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unScribe();
        }
     },[])
     //logout
     const logOut=()=>{
        setLoading(true);
        return signOut(auth)
     }
     //Login
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Tranfer data all page
    const authInfo={user,createUser,logOut,signIn,loading}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;