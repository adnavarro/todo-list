import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        loading: false,
        errors: {}
    }

    onChangeEmail = e =>
        this.setState({ 
            username:  e.target.value
        });

    onChangePassword = e =>
        this.setState({ 
            password:  e.target.value
        });

    onSubmit = () => {
        const errors = this.validate(this.state.username, this.state.password);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            this.setState({ loading: true });
            this.props
            .submit(this.state.username, this.state.password);
        }
    };

    validate = (username, password) => {
        const errors = {};
        if(!username) errors.username = "¡No puede estar vacio!";
        if(!password) errors.password = "¡No puede estar vacio!";
        return errors;
    };

    render(){
        const { username, password, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                {global.errors && <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>}
                <Form.Field error={!!errors.username}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Aqui pones el nombre del usuario"
                        value={username}
                        onChange={this.onChangeEmail}
                    />
                    {errors.username && <InlineError text={errors.username}/>}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Make it secure"
                        value={password}
                        onChange={this.onChangePassword}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                    </Form.Field>
                    <Button primary className="btn btn-primary btn-lg btn-block">Iniciar sesion</Button>
                    <Button href='/register' primary className="btn btn-primary btn-lg btn-block">Registrate</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;