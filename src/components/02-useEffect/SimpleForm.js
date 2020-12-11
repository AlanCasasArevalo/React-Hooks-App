import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './effects.css'
import Message from "./Message";

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
    }, [formState])

    useEffect(() => {
    }, [name])

    useEffect(() => {
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
            <hr/>
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

            {( name === '123') && <Message /> }
        </>
    );
};

SimpleForm.propTypes = {

};

export default SimpleForm;