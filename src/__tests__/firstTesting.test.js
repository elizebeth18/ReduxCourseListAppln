import App from '../Components/App';
import {render,screen} from '@testing-library/react';

describe("tests app.js component",() => {
    test("renders home component",() => {
        render(<App />)
    })
});