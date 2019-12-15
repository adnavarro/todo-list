import React from 'react';
import PropTypes from 'prop-types';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import TodoRegisterPage from './components/pages/todoRegisterPage';
import Dashboard from './components/pages/Dashboard';
import TodoUpdate from './components/pages/todoUpdatePage';
import TodoDelete from './components/pages/todoDeletePage';

const App = ({ location }) => 
    <div className="ui container">

        <GuestRoute location = { location } path = "/" exact component={ LoginPage } />
        <GuestRoute location = { location } path = "/register" exact component={ RegisterPage } />
        <UserRoute location = { location } path = "/dashboard" exact component={ Dashboard } />
        <UserRoute location = { location } path = "/todo/register" exact component={ TodoRegisterPage } />
        <UserRoute location = { location } path = "/todo/delete/:id" exact component = { TodoDelete } />
        <UserRoute location = { location } path = "/todo/update/:id" exact component = { TodoUpdate } />

    </div>

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;