import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App.js';
import EnquiryForm from './EnquiryForm/EnquiryForm.js';
import ViewEnquires from './ViewEnquires/ViewEnquires.js';
import NoMatchFound from './NoMatch/NoMatch.js';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="enquiryForm" element={<EnquiryForm />} />
                <Route path="viewEnquires" element={<ViewEnquires />} />
                <Route path="*" element={<NoMatchFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;



