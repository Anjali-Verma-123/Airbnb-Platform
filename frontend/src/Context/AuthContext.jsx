import React from 'react';
import {createContext, useState} from "react";

export const authDataContext = createContext()
function AuthContext({children})
 {
    // const serverUrl = "https://airbnb-platform-backend.onrender.com"
     // const serverUrl = "http://localhost:8000";
  const serverUrl = "https://airbnb-platform-backend-6yqv.onrender.com";
    let [loading, setLoading] = useState(false)

    let value= {
        serverUrl,
        loading, setLoading
    }
  return (
    <div>
      <authDataContext.Provider value = {value}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
