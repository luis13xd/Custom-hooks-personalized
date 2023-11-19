import { useState } from "react";
//vamos a hacer que el hook pueda recibir cualquier objeto para nuestro valor inicial del formulario
export const useForm = (initialForm = {}) => {

    //recibe como valor inicil lo que sea que le envien a travez del initialform
    const [formState, setFormState] = useState(initialForm)

    //funcion para poder cambiar el valor del input y almacenarlo de nuevo
    //en los argumentos ponemos el evento target que es el que muestra el valor actual del input, dentro de la funcion lo desestructuramos con lo que vamos a usar de los input, osea el nombre y el valor
    const onInputChange = ({ target }) => {
        //desestructuramos el target y dentro va a estar el valor y el nombre de cada input 
        const { name, value } = target;
        //set es para modificar el vaor al formstate con {} ya que es un objeto
        setFormState({
            //aca coon los 3 puntos seguido de formstate desestructuramos mantenemos los valores de todos los demas datos
            ...formState,
            //aca solo ponemos lo que queremos cambiar, dentro de [] ya que es una propiedad de un objeto y lo igualamos a value ya que es el nuevo valor que va a tomar el name y se actualiza
            [name]: value,
        })
    }

    const reset = () => {
        setFormState(initialForm);
    };

    return {
        ...formState, //lo desestructuramos para luego otenerlos valores, es decir los estara exportando
        formState,
        onInputChange,
        reset,
    }
}
