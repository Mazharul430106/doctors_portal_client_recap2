import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn User.
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut User. 
    const signOutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing')
            setUser(currentUser);
        })

        return () => {
            unSubcribe();
        };
        
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;