import React from "react";

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

// This is step 1 where this file is used in creating the UserContext