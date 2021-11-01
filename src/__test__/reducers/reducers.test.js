import reducer from "../../reducers";
import ProductMock from "../../__mocks__/ProductMock";

describe('Reducers', () => {

    // Se comprueba que no debe retornar nada (objeto vacio), debido a que se envió '' (string vacio)  
    test('Retornar initialState', () => {
        expect( reducer({}, '') ).toEqual({});
    });
    
    // Se comprueba que ante un initialState que contiene un array (cart),
    // si se le envia el action de 'ADD_TO_CART', se debe añadir un producto al initialState
    test('ADD_TO_CART', () => {
        
        const initialState = {
            cart: []
        };
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload
        };
        const expected = {
            cart: [
                ProductMock
            ]
        };

        expect( reducer(initialState, action) ).toEqual(expected);
    });

    // Se comprueba que ante un initialState que contiene un array (cart) con un elemento (ProductMock),
    // si se le envia el action de 'REMOVE_FROM_CART', el elemento no debe aparecer en el array (o sea se filtra)
    test('REMOVE_FROM_CART', () => {
        
        const initialState = {
            cart: [
                ProductMock
            ]
        };
        const payload = ProductMock;
        const action = {
            type: 'REMOVE_FROM_CART',
            payload
        };
        const expected = {
            cart: []
        };

        expect( reducer(initialState, action) ).toEqual(expected);
    });
    
})