import { useContext } from "react";
import { ClientContext } from "../context/ClientContext"

const useClient = ():any => useContext(ClientContext) 

export default useClient