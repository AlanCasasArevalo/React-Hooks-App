import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './effects.css'

const SimpleForm = props => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect(() => {
        console.log(`hola`)
        // cuando pones los corchetes [] como dependencia solo se lanza la primera vez que se ejecuta el componente
    }, [])

    useEffect(() => {
        console.log(`El formulario ha cambiado`)
        console.log(`Email => ${email}`)
        console.log(`Name => ${name}`)
        // cuando pones un valor entre los corchetes [formState] se ejecuta la funcion cada vez que cambie este valor en este caso los inputs
    }, [formState])

    useEffect(() => {
        console.log(`Name => ${name}`)
        // cuando pones un valor entre los corchetes [name] se ejecuta la funcion cada vez que cambie este valor en este caso los inputs
    }, [name])

    useEffect(() => {
        console.log(`Email => ${email}`)
        // cuando pones un valor entre los corchetes [email] se ejecuta la funcion cada vez que cambie este valor en este caso los inputs
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@mail.com"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
            </div>
        </>
    );
};

SimpleForm.propTypes = {

};

export default SimpleForm;