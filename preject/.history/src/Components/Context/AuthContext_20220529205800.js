import React, { useState, useEffect } from 'react'
import {auth } from

const AuthContext = React.createContext(null)
export function useAuth(){
    return React.useContext(AuthContext)
}
export  function AuthProvider({Children}) {
    const [currentUser,setCurrentUser] = useState(null)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
useEffect(()=>{
  const unsubscribe =  auth.onAuthStateChanged(user=>{
     setCurrentUser(user)   
    })
    return unsubscribe
},[])
    const value={
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>
  )
}
