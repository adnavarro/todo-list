import React from 'react';
import api from '../../api';
import PropTypes from 'prop-types';
import RegisterForm from '../forms/RegisterForm';

class Register extends React.Component{

    submit = ( username, password ) => {
 
        api.user.signup( username, password )
        .then(() => 
            this.props.history.push('/')
        ).catch( err => 
            {
                alert('Ocurrio un error durante su solicitud');
            }
        );
    }

    render(){
        return(
            <div style={{padding:"10%"}}>
                <h1>Registro</h1>

                <RegisterForm submit={this.submit} />
            </div>
        );
    }
}

Register.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default Register;