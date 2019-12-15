import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
    state = {
        data: {
            nombre: '',
            description: ''
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
                .submit(this.state.data.nombre, this.state.data.description);
        }
        else console.log('Algo raro paso');
    };

    validate = (data) => {
        const errors = {};
            
            if(!data.nombre) errors.nombre = "Debes colocar el nombre de la tarea";
            if(!data.description) errors.description = "Debes colocar la contraseña";

        return errors;
    };

    render(){
        const { data, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>

                <Form.Field error={!!errors.nombre}>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        placeholder="Aqui va el nombre"
                        value={data.nombre}
                        onChange={this.onChange}
                    />
                    {errors.nombre && <InlineError text={errors.nombre}/>}
                </Form.Field>

                <Form.Field error={!!errors.description}>
                    <label htmlFor="description">Descripcion de la tarea</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description" 
                        placeholder="Estudiar"
                        value={data.description}
                        onChange={this.onChange}
                    />
                    {errors.description && <InlineError text={errors.description}/>}
                    </Form.Field>

                <Button primary>Registrar</Button>
            </Form>
        );
    }
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default TodoForm;