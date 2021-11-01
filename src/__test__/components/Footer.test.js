import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Component Footer', () => {
    
    const footer = mount(<Footer/>);

    test('Renderizando el componente Footer', () => {
        expect(footer.length).toEqual(1);
    });

    test('Probar render del titulo', () => {
        let titleRender = footer.find(".Footer-title").text(); 
        expect(titleRender).toEqual('Platzi Store');
    });
});

// Se debe transformar el componente en JSON
// Footer no esta conectado con Redux, por lo que no se le pasa el provider
// La transformacion a JSON, es para comparar que NO HAYA CAMBIADO, ya q es un componente UI
describe('Footer Snapshot', () => {

    test('Probar la UI del componente Footer', () => {
       
        const footer = create(<Footer></Footer>);
        // Vuelve Rigido al componente, es decir, que sobre este snapshot se hará la comparacion
        expect(footer.toJSON()).toMatchSnapshot(); 
    });
});
