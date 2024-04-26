import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn User.
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut User. 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update profile.
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }


    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user observing')
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubcribe();
        };

    }, [])

    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;