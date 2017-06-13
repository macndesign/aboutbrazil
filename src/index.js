import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import './index.css';

(function (win) {
    var pageData = {ptBr: {}, enUs: {}, sp: {}};
    $.when(
        // pt-BR Portuguese
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/33ce4ab1be77b2032e67b26056a81d8c/raw/', function(data) {
            pageData.ptBr.home = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/60e886bd3fe6656aaa0d7ffe176b40e4/raw/', function(data) {
            pageData.ptBr.weAre = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/b1212ec9bf68f2276e0eac805e46350a/raw/', function(data) {
            pageData.ptBr.services = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/e2d81e6fbbf4797828b0b3da0a9ec07f/raw/', function(data) {
            pageData.ptBr.customers = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/5ea1ca8611fa1d0007cfbf86bfa200a7/raw/', function(data) {
            pageData.ptBr.whyBrazil = data;
        }),

        // en-US English
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/80ac7f76d89c63d999492dbe81f5de48/raw/', function(data) {
            pageData.enUs.home = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/08787d93959801c2eb638ae90f7e8149/raw/', function(data) {
            pageData.enUs.weAre = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/f0f53cc4587568942f90882b35ecfde1/raw/', function(data) {
            pageData.enUs.services = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/4c8a9b9c8d6fcb6026c93e596ec6256b/raw/', function(data) {
            pageData.enUs.customers = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/afacdd7ef723a77f499cf7c78729ac5d/raw/', function(data) {
            pageData.enUs.whyBrazil = data;
        }),

        // sp Spanish
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/e28600dcdeb8e0f9bb5d780f0dbb08a9/raw/', function(data) {
            pageData.sp.home = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/791517da9c1ed36c298f4496e647fe04/raw/', function(data) {
            pageData.sp.weAre = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/7e81aaf940155895ee4da1686ca621d7/raw/', function(data) {
            pageData.sp.services = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/a1f815860135d1e0c21bf3e5000c5e4a/raw/', function(data) {
            pageData.sp.customers = data;
        }),
        $.getJSON('https://gist.githubusercontent.com/AboutBrazil/e24ad10f956db3930dbf8de45bebc452/raw/', function(data) {
            pageData.sp.whyBrazil = data;
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
