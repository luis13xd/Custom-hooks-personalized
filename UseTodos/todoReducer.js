
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        //1.1 cuando no se que hcaer aun podemos poner esto mientras tanto para mostrar un msjs
        //2.2 caso para añadir un todo, 'Add Todo' es el type
        case 'Add Todo':
            // 1.1throw new Error('Action.type = ABC no esta implementada');
            //para añadir un todo ponemos eel estado inicial con todo lo anterior osea los 3 puntos y como accion ponemos el paayload
            return [ ...initialState, action.payload ];
        //para eliminar un todo
        case 'Remove Todo':
            //initialState.filter se usa este metodo para devolver un array, dentro de esto se accede al todo y se le da una condicion
            //la condicion consiste en que se quedan en el array todos los id diferentes al id que se envia en action.payload, es decir que devuleve en un array todos los id menos el que enviamos y este ultimo se elimina
            return initialState.filter( todo => todo.id !== action.payload );
        //para establecer si la tarea se ha hecho o no
        case 'Toggle Todo':
            //
            return initialState.map ( todo => {
                //En cada iteración del map(), se verifica si el id de la tarea actual (todo.id) coincide con el payload de la acción (action.payload). El payload generalmente contendría el id de la tarea 
                if ( todo.id === action.payload ) {//si el id coincide..
                    return {
                        ...todo,//trae todas las demas propiedades
                        done: !todo.done,//modifica la del donde a lo contrario, si es true pasa a false y viceversa
                    }
                }
                return todo;//Si el id de la tarea no coincide con action.payload, la tarea se deja sin cambios y se devuelve como está en el nuevo array.
            });

            default:
                return initialState;
    }

}