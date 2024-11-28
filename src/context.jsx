import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./hooks/use-fetch";
import { getCurrentUser } from "./db/apiAuth";

// Create the context
const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const { data: user, loading, fn: fetchUser } = useFetch(getCurrentUser);

  // Check if the user is authenticated
  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UrlContext.Provider value={{ user, fetchUser, isAuthenticated, loading }}>
      {children}
    </UrlContext.Provider>
  );
};

// Custom hook to use the context
export const UrlState = () => {
  const context = useContext(UrlContext);

  if (!context) {
    throw new Error("useUrlState must be used within a UrlProvider");
  }

  return context;
};

export default UrlProvider;