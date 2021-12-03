import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props)=>{

    const [idreceta, setIdreceta] = useState(null);
    const [informacion, setreceta] = useState({});

    useEffect( ()=>{
        const obtenerReceta = async ()=> {
            if(!idreceta)return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const respuesta = await axios.get(url);

            setreceta(respuesta.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta])

    return (
        <ModalContext.Provider
            value={{
                informacion,
                setIdreceta,
                setreceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;
