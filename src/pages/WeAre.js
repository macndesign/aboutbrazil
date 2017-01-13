import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutPhoto from '../components/AboutPhoto';
import FeaturesLite from '../components/FeaturesLite';
import TextSimple from '../components/TextSimple';
import Team from '../components/Team';

class WeAre extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.weAre.header}/>
                <TextSimple body={this.props.data.weAre.body}/>
                <Team teams={this.props.data.weAre.teams}/>
                <FeaturesLite features={this.props.data.home.features} colCssClass="col-3" />
                <AboutPhoto photo={this.props.data.home.about.photo}
                            title={this.props.data.home.about.title}
                            subtitle={this.props.data.home.about.subtitle}
                            body={this.props.data.home.about.body} />
            </div>
        );
    }
}

export default WeAre;
