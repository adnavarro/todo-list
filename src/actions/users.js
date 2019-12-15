import api from "../api";
import { userLoggedIn } from "./auth";
import { USER_LIST } from '../types';

export const userList = (data) => ({
    type: USER_LIST,
    data
});

export const signup = (data) => (dispatch) => 
    api.user.signup(data)
    .then(user  => dispatch(userLoggedIn(user))
    ).catch( err => 
        {
            return err.data;
        }
    );

export const viewUsers = () => (dispatch) => 
    api.user.viewUsers()
    .then(user  => dispatch(userList(user))
    ).catch( err => 
        {
            return err.data;
        }
    );