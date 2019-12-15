import axios from 'axios';

export const serverUrl = 'http://localhost:8080';

export default {
    session: {
        login: async ( username, password ) => 
            await axios.post( 
                serverUrl + '/users/login', 
                { username, password }
            ).then( res =>  
                {
                    localStorage.setItem('ApiToken', res.data.token);
                    return res.data;
                }
            ).catch(err =>
                {
                    return err.response.data;
                }
            )
    },

    user: {
        signup: async ( username, password ) =>
        await axios.post( 
            serverUrl + '/users/register', 
            { username, password }
        ).then( res =>  
            {
                return res.data;
            }
        ).catch(err =>
            {
                return err.response.data;
            }
        )
    },

    todo: {
        todos: async (token) =>
        await axios.post(
            serverUrl + '/activities/user', 
            { token }
        ).then( res =>  
            {
                return res.data;
            }
        ).catch(err =>
            {
                return err.response.data;
            }
        ),

        register: async ( token, nombre, description ) =>
        await axios.post(
            serverUrl + '/activities/add',
            { token, nombre, description }
        ).then( res =>  
            {
                return res.data;
            }
        ).catch(err =>
            {
                return err.response.data;
            }
        ),

        update: async ( token, nombre, description, id, isActive ) =>
        await axios.put(
            serverUrl + '/activities/update',
            { token, nombre, description, id, isActive }
        ).then( res =>  
            {
                return res.data;
            }
        ).catch(err =>
            {
                return err.response.data;
            }
        ),

        delete: async ( token, id ) =>
        await axios.post(
            serverUrl + '/activities/delete',
            { token, id }
        ).then( res =>  
            {
                return res.data;
            }
        ).catch(err =>
            {
                return err.response.data;
            }
        )
    }
}
        
