import uniqid from 'uniqid';
import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [sessionData, setSessionData] = useState({
    id: uniqid('session-'),
    productsSelected: [],
    status: 'initial_state',
    price: 0,
    tableNum: 0,
  });

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
