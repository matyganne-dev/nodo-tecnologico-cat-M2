

/* La idea de esta función
es "encapsular" todo el proceso de
recuperación de datos de un endPoint.
en una misma función. donde le vamos
a cambiar el parametro de entrada
que sería el endPoint donde quiero
hacer la consulta */

export const fnRecuperarDatosEndPoint = async (endPoint)=>{

    let datos = "";

    try {
        /*(1) estoy haciendo request -> que me devuelve un respose */

        let response = await fetch(endPoint);

        /*(2) convierto el response a JSON => objeto javaScript */
        datos = await response.json();
        
    } catch (error) {
        console.log(error);
    }

    /* Si todo sale bien, datos irá completo y sino irá vació */
    return datos;

};
