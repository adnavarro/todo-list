import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import api from '../../api';
import Navbar from '../interfaz/NavBar';

class DashboardPage extends React.Component{
    state = {
        data: [{ }],
    }

    componentDidMount() {
        var apiToken = localStorage.getItem('ApiToken');
        api.todo.todos(apiToken)
        .then( res =>  { console.log(res);
            this.setState({
                data: res
            })
            this.showTodo(this.state.data);
        }).catch( err => 
            {
                alert('Ha ocurrido un error al cargar la informacion');
            }
        );
    }

    showTodo(data) {
        var codeBlock = '';
        for (var i = 0; i < data.length ; i++){
            codeBlock = codeBlock +
            '<div class="ui segments">' + 
            '<div class="ui segment"><p>'+data[i]['nombre']+'</p></div>' +
            '<div class="ui segment"><p> Estatus: '+data[i]['isActive']+'</p></div>' +
            '<div class="ui segment"><p>'+data[i]['description']+'</p> </div>' +
            '<a href ="todo/update/'+data[i]['id']+'" class=" editBtn ui vertical animated green button " tabindex="0">'+
            '<div class="hidden content">Editar</div>'+
            '<div class="visible content">'+
                '<i class="pencil alternate icon"></i>'+
            '</div>'+
            '</a>'+
            '<a href ="todo/delete/'+data[i]['id']+'" class="ui vertical animated red button " tabindex="0">'+
            '<div class="hidden content">Eliminar</div>'+
            '<div class="visible content">'+
                '<i class="trash icon"></i>'+
            '</div>'+
            '</a>' +
            '</div>'
        }
        document.getElementById("todo").innerHTML = codeBlock;
    }

    render(){
        return(
        <div>
            <Navbar></Navbar>
            <div style={{padding:"5%"}}>
                <h1>My TODOS</h1>
                <div id="todo">
                </div>
            </div>
        </div>
        )
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps( state ) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect( mapStateToProps, { logout: actions.logout })( DashboardPage );