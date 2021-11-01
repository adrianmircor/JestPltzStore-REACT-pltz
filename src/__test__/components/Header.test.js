import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Header from '../../components/Header';

import ProviderMock from '../../__mocks__/ProviderMocks';

/* 
mount --> Cuando necesitas el DOM
shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM 
*/

describe('Componente Header', () => {

    test('Probar existencia Header', () => {

        const header = shallow(
            <ProviderMock>
                <Header></Header>
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });

    test('Probar render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header></Header>
            </ProviderMock>
        );
        let titleRender = header.find(".Header-title").text();
        expect(titleRender).toEqual('Platzi Store');
    });
})

// Se debe transformar el componente en JSON
// Header sí esta conectado con Redux, por lo que se le pasa el provider
// La transformacion a JSON, es para comparar que NO HAYA CAMBIADO, ya q es un componente UI
describe('Footer Snapshot', () => {

    test('Probar la UI del componente Header', () => {
       
        const header = create(
            <ProviderMock>
                <Header></Header>
            </ProviderMock>
        );
        // Vuelve Rigido al componente, es decir, que sobre este snapshot se hará la comparacion
        expect(header.toJSON()).toMatchSnapshot(); 
    });
});


