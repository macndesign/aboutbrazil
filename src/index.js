import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ajax from './common/Ajax';
import './index.css';

const data = new Ajax();

data.getJSON('/data/home.json')
    .then(function (response) {
        ReactDOM.render(
            <App data={response}/>,
            document.getElementById('root')
        );
    }).catch(function (err) {
        console.log(err);
    });
