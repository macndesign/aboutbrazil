import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import './index.css';

(function (win) {
    function render() {
        var route = win.location.hash.substr(1);
        $.getJSON('/data/home.json', function (response) {
            ReactDOM.render(
                <App data={response} route={route}/>, document.getElementById('root')
            )})
    }
    win.addEventListener('hashchange', render);
    render();
})(window);
