import React from "react";
import { Navigate } from "react-router-dom";
import { getPermissionsFromToken } from "utils/jwtDecoder"


interface IProp {
    permission : string;
    children : React.ReactElement;
}

const ProtectedRoute = (props:IProp) :React.ReactElement=>{
    const {permission ,children } = props
    const permissions = getPermissionsFromToken()
    if (permissions.includes(permission)) { 
        return <Navigate to="/" replace />;
      }
    
    return children;
}
export default ProtectedRoute