import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutPhoto from '../components/AboutPhoto';
import FeatureServices from '../components/FeatureServices';

class Services extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.services.header}/>
                <FeatureServices features={this.props.data.services.list} />
                <AboutPhoto photo={this.props.data.home.about.photo}
                            title={this.props.data.home.about.title}
                            subtitle={this.props.data.home.about.subtitle}
                            body={this.props.data.home.about.body} />
            </div>
        );
    }
}

export default Services;
