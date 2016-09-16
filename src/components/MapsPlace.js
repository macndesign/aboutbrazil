import React, {Component} from 'react';

const markerStyle = {
    height: 64,
    width: 64,
    backgroundImage: "url('./assets/images/maps-marker-1.png')",
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
