import getData from "../../utils/getData";

describe('Fetch API', () => {

    beforeEach( () => {
        fetch.resetMocks();
    });

    test('Probar la llamada a una API y debe retornar datos', () => {

        // Se simula que la respuesta es 'DataDeLaApi'
        fetch.mockResponseOnce(JSON.stringify( {data: 'DataDeLaApi'} ));
        // La data que me responde la api, debe ser igual a la que se simuló arriba
        getData('https://google.com')
            .then( (response) => {
                expect(response.data).toEqual('DataDeLaApi');
            });

        // Se espera que la api la cual se llama (fetch.mock.calls[0][0]), deber ser igual a 
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
    });
    
});
