import React, { createContext, useContext, useState } from "react";

const CallContext = createContext();

const CallProvider = ({ children }) => {
  const [caller, setCaller] = useState();
  const [callPending, setCallPending] = useState(false);
  const [callConnecting, setCallConnecting] = useState(false);
  const [callOngoing, setCallOngoing] = useState(false);
  const [callType, setCallType] = useState(false);

  return (
    <CallContext.Provider
      value={{
        caller,
        setCaller,
        callPending,
        setCallPending,
        callConnecting,
        setCallConnecting,
        callOngoing,
        setCallOngoing,
        callType,
        setCallType,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};

export const CallState = () => {
  return useContext(CallContext);
};

export default CallProvider;
