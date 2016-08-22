import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutCustom from '../components/AboutCustom';

class WhyBrazil extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.whyBrazil.header}/>
                <AboutCustom about={this.props.data.whyBrazil.about}
                             aboutMap={this.props.data.whyBrazil.aboutMap}/>
            </div>
        );
    }
}

export default WhyBrazil;
