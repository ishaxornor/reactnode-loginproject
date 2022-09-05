//import axios form 'axios';

import { sessionService } from "redux-react-session";

export const loginUser = (credentials , history , setFieldError , setSubmitting) => {
    //make checks and get some data 
    const user = {
        name:  "George",
        "email" : "geo@gmail.com"
    }
    const status = true ;

    if(status === true) {
        //allow access and redirect 
    }
    else {
        //return error to the user
    }
}

export const signupUser = (credentials , history , setFieldError , setSubmitting) => {

}

export const logoutUser = () => {
    return() => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        //history.pushState('/');
    }
}