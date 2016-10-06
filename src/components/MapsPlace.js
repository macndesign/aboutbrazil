import React, {Component} from 'react';

const markerStyle = {
    height: 64,
    width: 64,
    backgroundSize: 'cover'
};

class MapsPlace extends Component {
    render() {
        return (
            <div style={{...markerStyle, backgroundImage: `url(${this.props.marker})`}}
                 title={this.props.text}/>
        );
    }
}

MapsPlace.propTypes = {
    marker: React.PropTypes.string,
    text: React.PropTypes.string
};

export default MapsPlace;
