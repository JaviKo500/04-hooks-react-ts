import { use, type JSX } from "react";
import { Navigate } from "react-router";

import { UserContext } from "../context/UserContext";

interface PrivateRouterProps {
  element:  JSX.Element;
}

export const PrivateRouter = ( { element }: PrivateRouterProps ) => {
  const { authStatus } = use( UserContext );
  if ( authStatus === 'checking' ) {
    return <div>Loading...</div>;
  }
  if ( authStatus === 'authenticated' ) {
    return element;
  }
  return <Navigate to="/login" replace />
}
