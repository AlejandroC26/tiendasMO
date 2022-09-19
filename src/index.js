import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


setTimeout(() => {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
}, 500);

