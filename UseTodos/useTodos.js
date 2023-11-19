import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
    //JSON.parse toma 'todos' y lo vuelve a un objeto, es decir que hace tdodo lo contrario de JSON.stringify
    //entonces accedemos al localstorage a todos* y lo convertimos en un objeto y en caso de que no tenga valor todos* o sea null nos guarda un arreglo vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

     //efecto para cuando todos* cambie, vamos a guardar en el localstorage
     useEffect(() => {
        //localStorage indica que quiero guardar algo ahi en este caso la clave es todos y el json.stringify lo convierte a una cadena de string en formato .json
          localStorage.setItem( 'todos', JSON.stringify( todos ) );//solo se pueden guardar strings en el localstorage por eso lo ponemos dentro de comilllas
        
        }, [todos])

    //funcion para añadir tareas
    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',//va el type en donde va el mismo nombre
            payload: todo,//en payload va nuestro todo 
        }
        dispatch(action);//en el dispatch va nuestra accion mandada al reducer
    }

    //funcion para eliminar una tarea 'todo'
    const handleDeleteTodo = (id) => {
        // se utiliza el método dispatch para enviar una acción al store de Redux
        dispatch({
            type: 'Remove Todo',// Esto indica que la acción es del tipo "Remove Todo". En el contexto de Redux, se usa para identificar qué tipo de operación debe realizar el reducer 
            payload: id,// La propiedad payload generalmente se utiliza para enviar datos adicionales con la acción. En este caso, el ID del todo que se debe eliminar se pasa como carga útil. El reducer puede acceder a este ID para identificar qué todo debe eliminarse del estado.
        })
    }

    ///funcion para determinar si la tarea est hecha o no
    const handleToggleTodo = (id) => {
        // se utiliza el método dispatch para enviar una acción al store de Redux
        dispatch({
            type: 'Toggle Todo',//Esto indica que la acción es del tipo 'Toggle Todo'
            payload: id,//envia el id para que se use despues en la comparacion en el reducer
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
    }
}
