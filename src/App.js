import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WeAre from './pages/WeAre';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = React.createClass({
    render: function () {
        let Child;

        switch (this.props.route) {
            case '/we-are':
                Child = WeAre;
                break;
            default:
                Child = Home;
        }

        return (
            <div>
                <NavBar name={this.props.data.home.navBar.name}
                        menuItems={this.props.data.home.navBar.menuItems}/>
                <Child data={this.props.data} />
                <Contact title={this.props.data.home.contact.title}
                         subtitle={this.props.data.home.contact.subtitle}
                         address={this.props.data.home.contact.address}
                         about={this.props.data.home.contact.about}
                         association={this.props.data.home.contact.association}/>
                <Footer/>
            </div>
        );
    }
});

export default App;
