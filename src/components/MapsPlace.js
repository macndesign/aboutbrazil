import React, {Component} from 'react';

const markerStyle = {
    background: '#c62828',
    height: 32,
    width: 32,
    border: 'solid 5px #ef5350',
    borderRadius: 16,
    opacity: 0.9,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 4
};

class MapsPlace extends Component {
    render() {
        return (
            <div style={markerStyle}>
                {this.props.text}
            </div>
        );
    }
}

MapsPlace.propTypes = {
    text: React.PropTypes.string
};

export default MapsPlace;
