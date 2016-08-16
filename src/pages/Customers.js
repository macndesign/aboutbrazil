import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import PartnersMap from '../components/PartnersMap';

class Services extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.customers.header}/>
                <PartnersMap/>
            </div>
        );
    }
}

export default Services;
