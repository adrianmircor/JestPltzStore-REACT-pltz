// Este archivo fue creado con la finalidad que simule a una consulta con fetch
const getData = (api) => {
    
    return fetch(api)
            .then( (response) => response.json())
            .then( (responseJson) => responseJson)
            .catch( (error) => error);
};

export default getData;