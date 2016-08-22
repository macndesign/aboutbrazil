import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import './index.css';

(function (win) {
    var pageData = {home: {}, weAre: {}};
    $.when(
        $.getJSON('/data/home.json', function(data) {
            pageData.home = data;
        }),
        $.getJSON('/data/we-are.json', function(data) {
            pageData.weAre = data;
        }),
        $.getJSON('/data/services.json', function(data) {
            pageData.services = data;
        }),
        $.getJSON('/data/customers.json', function(data) {
            pageData.customers = data;
        }),
        $.getJSON('/data/why-brazil.json', function(data) {
            pageData.whyBrazil = data;
        })
    ).then(
        function() {
            if (pageData.home &&
                pageData.weAre &&
                pageData.services &&
                pageData.customers &&
                pageData.whyBrazil) {
                console.log(pageData);
                function render() {
                    var route = win.location.hash.substr(1);
                    ReactDOM.render(
                        <App data={pageData} route={route}/>, document.getElementById('root')
                    )
                }
                win.addEventListener('hashchange', render);
                render();
            }
        },
        function (err) {
            console.log(err);
        }
    );
})(window);
