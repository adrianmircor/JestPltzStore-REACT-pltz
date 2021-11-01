// Para el adapter de enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Configuracion para utilizar mocks con fetch, permite capturar las peticiones y ejecutarlas
global.fetch = require('jest-fetch-mock');