import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import './App.css';

const About = (props) => <div>About</div>;

const App = React.createClass({
    render: function () {
        let Child;

        switch (this.props.route) {
            case '/about':
                Child = About;
                break;
            default:
                Child = Home;
        }

        return (
            <div>
                <NavBar name={this.props.data.navBar.name}
                        menuItems={this.props.data.navBar.menuItems}/>
                <Child data={this.props.data} />
            </div>
        );
    }
});

export default App;
