import React from 'react';
import api from '../../api';
import PropTypes from 'prop-types';
import TodoUpdateForm from '../forms/TodoUpdateForm';
import Navbar from '../interfaz/NavBar';

class TodoUpdate extends React.Component{

    submit = ( nombre, description, isActive ) => {
        let id = this.props.match.params.id;
        let token = localStorage.getItem('ApiToken');
        api.todo.update( token, nombre, description, id, isActive )
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

                    <TodoUpdateForm submit={this.submit} />
                </div>
            </div>
        );
    }
}

TodoUpdate.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default TodoUpdate;