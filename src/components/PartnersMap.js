import React from 'react';
import GoogleMap from 'google-map-react';
import MapsPlace from './MapsPlace';

const PartnersMap = (props) => (
    <div style={{background: 'rgb(129, 162, 202)'}}>
        <div className="container">
            <div className="row">
                <div style={{height: 550}}>
                    <GoogleMap
                        center={[12.779349, 20.331762]}
                        zoom={1}>
                        <MapsPlace lat={-12.844249} lng={-49.453391} text={'BR'}/>
                        <MapsPlace lat={-25.274792} lng={-61.758078} text={'AR'}/>
                        <MapsPlace lat={-13.870390} lng={-64.570578} text={'BO'}/>
                        <MapsPlace lat={2.339118} lng={-72.129171} text={'CO'}/>
                    </GoogleMap>
                </div>
            </div>
        </div>
    </div>
);

export default PartnersMap;
