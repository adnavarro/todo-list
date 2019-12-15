import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './loginPage.css';
import LoginForm from '../forms/loginForm';

class HomePage extends React.Component{

    submit = (username, password) => 
        this.props.login(username, password).then(() => this.props.history.push('/dashboard'));

    render(){
        const {isAuthenticated} = this.props.isAuthenticated;
        return(
            <div>
                <div className="row loginrow">
                    <div className="col-lg-4 col-centered logindiv">
                        { isAuthenticated ? 
                        <div>
                        </div>
                        :<div className="login">
                            <h1>Inicio de Sesion</h1>
                            <LoginForm submit={this.submit}/>
                        </div> }
                    </div>          
                </div>              
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
};
function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token
    }
  }
export default connect(mapStateToProps, { login })(HomePage);