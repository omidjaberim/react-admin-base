import jwt_decode from "jwt-decode";
import { getItem } from "./localStorage";
export const jwtDecoder = (token:string):any=>{    
    return (jwt_decode(token))  //// prints jwt body
}
export const getPermissionsFromToken = ():string[]  =>{
    const token = getItem("token")
    if(token)
        return jwtDecoder(token)?.realm_access?.roles
    else 
        return []    
}