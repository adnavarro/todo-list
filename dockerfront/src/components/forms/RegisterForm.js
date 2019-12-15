import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
    state = {
        data: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
        this.setState({ 
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            this.setState({ loading: true })
            this.props
                .submit(this.state.data.username, this.state.data.password);
        }
        else console.log('Algo raro paso');
    };

    validate = (data) => {
        const errors = {};
            
            if(!data.username) errors.username = "Debes colocar el nombre de usuario";
            if(!data.password) errors.password = "Debes colocar la contraseña";

        return errors;
    };

    render(){
        const { data, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>

                <Form.Field error={!!errors.username}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Aqui va el username"
                        value={data.username}
                        onChange={this.onChange}
                    />
                    {errors.username && <InlineError text={errors.username}/>}
                </Form.Field>

                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="********"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                    </Form.Field>

                <Button primary>Registrar</Button>
            </Form>
        );
    }
}

RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default RegisterForm;