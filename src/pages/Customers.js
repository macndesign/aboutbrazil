import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import PartnersMap from '../components/PartnersMap';
import CustomersTable from '../components/CustomersTable';

class Services extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.customers.header}/>
                <PartnersMap title={this.props.data.customers.map.title}
                             center={this.props.data.customers.map.center}
                             zoom={this.props.data.customers.map.zoom}
                             markers={this.props.data.customers.map.markers}
                             mapsApiKey={this.props.data.home.mapsApiKey}/>
                <CustomersTable list={this.props.data.customers.list}/>
            </div>
        );
    }
}

export default Services;
