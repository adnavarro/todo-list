import React from 'react';
import api from '../../api';

class todoDelete extends React.Component {
    delete = () => {
        let id = this.props.match.params.id;
        let token = localStorage.getItem('ApiToken');
        api.todo.delete( token, id )
        .then( res =>  { console.log(res)
            this.props.history.push('/dashboard');
            
            if (!alert('Registro Eliminado!'))
            window.location.reload();
            
        }).catch( err => 
            {
                alert('No se pudo eliminar el registro');
            }
        );
    }

    render() {
        return (
            <div>
                {this.delete()}
            </div>
        );
    }
}

export default todoDelete;
