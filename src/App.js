import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WeAre from './pages/WeAre';
import Services from './pages/Services';
import Customers from './pages/Customers';
import WhyBrazil from './pages/WhyBrazil';
import Contact from './components/Contact';
import './App.css';

const App = React.createClass({
    getInitialState() {
        return {
            lang: 'ptBr'
        }
    },

    handleEnglish() {
        this.setState({lang: 'enUs'});
    },

    handlePortuguese() {
        this.setState({lang: 'ptBr'});
    },

    handleSpanish() {
        this.setState({lang: 'sp'});
    },

    render: function () {
        let Child;

        switch (this.props.route) {
            case '/we-are':
                Child = WeAre;
                break;
            case '/services':
                Child = Services;
                break;
            case '/customers':
                Child = Customers;
                break;
            case '/why-brazil':
                Child = WhyBrazil;
                break;
            default:
                Child = Home;
        }

        return (
            <div>
                <NavBar name={this.props.data[this.state.lang].home.navBar.name}
                        menuItems={this.props.data[this.state.lang].home.navBar.menuItems}
                        contact={this.props.data[this.state.lang].home.navBar.contact}
                        onEnglishClick={this.handleEnglish}
                        onPortugueseClick={this.handlePortuguese}
                        onSpanishClick={this.handleSpanish}
                        lang={this.state.lang}/>
                <Child data={this.props.data[this.state.lang]} />
                <Contact title={this.props.data[this.state.lang].home.contact.title}
                         image={this.props.data[this.state.lang].home.contact.image}
                         email={this.props.data[this.state.lang].home.contact.email}
                         subtitle={this.props.data[this.state.lang].home.contact.subtitle}
                         address={this.props.data[this.state.lang].home.contact.address}
                         about={this.props.data[this.state.lang].home.contact.about}
                         association={this.props.data[this.state.lang].home.contact.association}
                         maps={this.props.data[this.state.lang].home.contact.maps}
                         mapsApiKey={this.props.data[this.state.lang].home.mapsApiKey}/>
            </div>
        );
    }
});

export default App;
