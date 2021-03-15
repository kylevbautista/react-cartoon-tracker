import React, {useReducer,createContext} from 'react'
import jwtDecode from 'jwt-decode';
import { assertNullableType } from 'graphql';

const initialState = {
    user: null
}

if(localStorage.getItem("jwtToken")){
    const decodedtoken = jwtDecode(localStorage.getItem("jwtToken"));

    if(decodedtoken.exp * 1000 <Date.now()){
        localStorage.removeItem("jwtToken");
    }
    else{
        initialState.user = decodedtoken;
    }
}

const AuthContext = createContext({
    user:null,
    long:(userData) => {},
    logout: () => {}
})

function authReducer(state,action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user: null
            }
        default:
            return state;
    }
}
function AuthProvider(props){
    const [state,dispatch] = useReducer(authReducer,initialState);

    const login = (userData) =>{
        localStorage.setItem("jwtToken",userData.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        });
    }
    const logout = () =>{
        localStorage.removeItem("jwtToken")
        dispatch({type: 'LOGOUT'});
    }
    return(
        <AuthContext.Provider
            value ={{user: state.user,login,logout}} 
            {...props}/>
    )
}


export {AuthContext,AuthProvider};
