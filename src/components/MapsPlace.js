import React, {Component} from 'react';

const markerStyle = {
    height: 64,
    width: 64,
    backgroundImage: "url('./assets/images/red-flag-marker.png')",
    backgroundSize: 'cover'
};

class MapsPlace extends Component {
    render() {
        return (
            <div style={markerStyle} title={this.props.text}/>
        );
    }
}

MapsPlace.propTypes = {
    text: React.PropTypes.string
};

export default MapsPlace;
