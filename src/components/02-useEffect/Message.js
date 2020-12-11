import React, {useEffect, useState} from 'react';

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords

    useEffect(() => {
        const mousemove = (e) => {
            const coords = {x: e.x, y: e.y}
            setCoords(coords)
        }

        window.addEventListener('mousemove', mousemove)

        console.log(`El componente fue montado`)
        return () => {
            console.log(`El componente fue desmontado`)
            window.removeEventListener('mousemove', mousemove)
        }
    }, [])

    return (
        <>
            <h1>Hola </h1>
            <p> x => {x}, y => {y}</p>
        </>
    );
};

export default Message;