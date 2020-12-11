import React, {useEffect} from 'react';

const Message = () => {

    useEffect(() => {
            console.log(`El componente fue montado`)
        return () => {
            console.log(`El componente fue desmontado`)
        }
    }, [])

    return (
        <>
            <h1>Hola </h1>
        </>
    );
};

export default Message;