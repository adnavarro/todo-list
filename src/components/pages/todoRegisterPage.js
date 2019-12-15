import React from 'react';
import api from '../../api';
import PropTypes from 'prop-types';
import TodoForm from '../forms/TodoForm';
import Navbar from '../interfaz/NavBar';

class TodoRegister extends React.Component{

    submit = ( nombre, description ) => {
        let token = localStorage.getItem('ApiToken');
        api.todo.register( token, nombre, description )
        .then(() => 
            this.props.history.push('/dashboard')
        ).catch( err => 
            {
                alert('Ocurrio un error durante su solicitud');
            }
        );
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div style={{padding:"10%"}}>
                    <h1>Agrega una actividad</h1>

                    <TodoForm submit={this.submit} />
                </div>
            </div>
        );
    }
}

TodoRegister.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default TodoRegister;