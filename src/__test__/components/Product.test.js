import React from "react";
import { mount, shallow } from "enzyme";

import Product from "../../components/Product";

import ProviderMock from "../../__mocks__/ProviderMocks"; // Pasa todo lo relacionado a redux
import ProductMock from "../../__mocks__/ProductMock";

describe('Componente Product', () => {

    test('Probar existencia de Product ', () => {
        
        const product = shallow(
            <ProviderMock>
                <Product></Product>
            </ProviderMock>
        );
        expect(product.length).toEqual(1);
    });

    //Testeando el click
    test('Probar el boton de comprar', () => {
        
        // jest.fn(): simula en vez de llamar a al funcion real
        const manejadorAgregarCarrito = jest.fn(); 
        const wrapper = mount(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={manejadorAgregarCarrito}>
                </Product>
            </ProviderMock>
        );
        wrapper.find('button').simulate('click');
        // Permite que garantice que solo se ejecute 1 vez
        expect(manejadorAgregarCarrito).toHaveBeenCalledTimes(1);
    });
})

