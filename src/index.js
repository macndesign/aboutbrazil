import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import './index.css';

(function (win) {
    var pageData = {ptBr: {}, enUs: {}};
    $.when(
        // pt-BR
        $.getJSON('/data/home.json', function(data) {
            pageData.ptBr.home = data;
        }),
        $.getJSON('/data/we-are.json', function(data) {
            pageData.ptBr.weAre = data;
        }),
        $.getJSON('/data/services.json', function(data) {
            pageData.ptBr.services = data;
        }),
        $.getJSON('/data/customers.json', function(data) {
            pageData.ptBr.customers = data;
        }),
        $.getJSON('/data/why-brazil.json', function(data) {
            pageData.ptBr.whyBrazil = data;
        }),

        // en-US
        $.getJSON('/data/home-en.json', function(data) {
            pageData.enUs.home = data;
        }),
        $.getJSON('/data/we-are-en.json', function(data) {
            pageData.enUs.weAre = data;
        }),
        $.getJSON('/data/services-en.json', function(data) {
            pageData.enUs.services = data;
        }),
        $.getJSON('/data/customers-en.json', function(data) {
            pageData.enUs.customers = data;
        }),
        $.getJSON('/data/why-brazil-en.json', function(data) {
            pageData.enUs.whyBrazil = data;
        })
    ).then(
        function() {
            if (pageData) {
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
