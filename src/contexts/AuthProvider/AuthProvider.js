import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

// create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
