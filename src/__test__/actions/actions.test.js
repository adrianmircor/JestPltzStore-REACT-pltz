import actions from "../../actions";
import ProductMock from "../../__mocks__/ProductMock";

// Solo se prueban los actions, es decir, cuando se llame a un metodo (add o remove), este debe retornar el expected creado
describe('Actions', () => {

    test('Probar action addToCart', () => {
        
        const payload = ProductMock; // payload con la estructura del producto
        const expected = {
            type: "ADD_TO_CART",
            payload
        };
        // actions: Trae el archivo de actions
        expect(actions.addToCart(payload)).toEqual(expected);
    });

    test('Probar action removeFromCart', () => {
        
        const payload = ProductMock; // payload con la estructura del producto
        const expected = {
            type: "REMOVE_FROM_CART",
            payload
        };
        // actions: Trae el archivo de actions
        expect(actions.removeFromCart(payload)).toEqual(expected);
    });
});