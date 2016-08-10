import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutPhoto from '../components/AboutPhoto';
import FeaturesLite from '../components/FeaturesLite';

class WeAre extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.weAre.header}/>
                <FeaturesLite features={this.props.data.home.features} />
                <AboutPhoto photo={this.props.data.home.about.photo}
                            title={this.props.data.home.about.title}
                            subtitle={this.props.data.home.about.subtitle}
                            body={this.props.data.home.about.body}
                            button={this.props.data.home.about.button} />
            </div>
        );
    }
}

export default WeAre;
