import { USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = ( user ) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = ( username, password ) => dispatch => 
    api.session.login( username, password )
    .then(user => {
        dispatch(userLoggedIn( user ));
    }).catch( err => 
        {
            return err.data;
        }
    );

export const logout = () => dispatch => {
        localStorage.removeItem('ApiToken');
        localStorage.removeItem('userData');
        dispatch(userLoggedOut());
    };