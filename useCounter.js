import { useState } from "react"

//un hook es una funcion que puede devolver un objeto {}, un arreglo[], un booleano,etc.
export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue )

    //recibe el valor a travez de argumentos y suma de 2 en 2
    const incrementdouble = (value)  => {
        setCounter( counter+value );
    };

    const increment = ()  => {
        setCounter( counter+1 );
    };

    const decrement = ()  => {//el contador no baja de 0
        //if ( counter === 0 ) return;
        setCounter( counter-1 );
    };

    const reset = ()  => {
        setCounter( initialValue );
    };

    return {
            counter,
            increment,
            decrement,
            reset,
            incrementdouble,
    }

}
