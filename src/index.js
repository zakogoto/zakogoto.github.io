import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

// import MarvelServices from './services/MarvelServices';

import './style/style.sass';


// MarvelService.getAllCharacters().then(res=> res.data.results.forEach(item => console.log(item.id)));
// MarvelService.getCharacter(1011027).then(res=> res.data.results.forEach(item => console.log(item.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);