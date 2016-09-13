import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import './index.css';

(function (win) {
    var pageData = {ptBr: {}, enUs: {}};
    $.when(
        // pt-BR
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/d735aac9bab5140986c9e39388516e8c/raw/', function(data) {
            pageData.ptBr.home = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/5ce8df11b78dd74672a4d3d5f46ad201/raw/', function(data) {
            pageData.ptBr.weAre = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/f30467a9d82d7cba435a503924fb78a8/raw/', function(data) {
            pageData.ptBr.services = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/e9a0ca23b973d5d15f28815db4b458cd/raw/', function(data) {
            pageData.ptBr.customers = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/d46917435ce74580f827f039a018f302/raw/', function(data) {
            pageData.ptBr.whyBrazil = data;
        }),

        // en-US
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/4e86d41ac26b362f297bd32b922feec9/raw/', function(data) {
            pageData.enUs.home = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/2ca86190c2f2481654fe710b0dd020c9/raw/', function(data) {
            pageData.enUs.weAre = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/b651329c03eddda70de5dc0360957b26/raw/', function(data) {
            pageData.enUs.services = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/803bbe100185bf4aa437d6e40c080412/raw/', function(data) {
            pageData.enUs.customers = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/abmrlucas/4b2e46c8bd770c9e4509b67f20205f72/raw/', function(data) {
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
