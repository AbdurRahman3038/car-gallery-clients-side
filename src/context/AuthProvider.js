import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';




export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();

    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;


// Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: "AIzaSyCVCX11A_tRAuv5IkiDcWUrxgZBabgZ2NI",
//   authDomain: "car-gallery-online.firebaseapp.com",
//   projectId: "car-gallery-online",
//   storageBucket: "car-gallery-online.appspot.com",
//   messagingSenderId: "486583850982",
//   appId: "1:486583850982:web:47afea1ad197fe21e3a827"
// };
