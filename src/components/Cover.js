import React, {Component} from 'react';

class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.images[0],
            imageIndex: 1
        };
        this.setImage = this.setImage.bind(this);
    }

    setImage() {
        this.setState({
            imageIndex: this.state.imageIndex + 1,
            image: this.props.images[this.state.imageIndex]
        });
    }

    componentWillMount() {
        // Cancels repeated action which was set up using setInterval
        clearInterval(this.interval);
    }

    componentDidMount() {
        if (this.props.imagesRotate) {
            this.interval = setInterval(this.setImage, this.props.imagesRotateTime * 1000);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.imageIndex === nextProps.images.length) {
            this.setState({imageIndex: 0});
        }

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const coverStyle = {
            backgroundImage: `url(${this.state.image})`,
            textShadow: '1px 1px 3px rgba(35, 35, 35, 1)',
            backgroundPositionY: -93
        };
        return (
            <section
                className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background mbr-after-navbar"
                id="header1-73" style={coverStyle}>
                <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-box__magnet--center-left">
                    <div className="mbr-overlay" style={{opacity: this.props.imageOpacity, backgroundColor: 'rgb(76, 105, 114)'}}/>
                    <div className="mbr-box__container mbr-section__container container">
                        <div className="mbr-box mbr-box--stretched">
                            <div className="mbr-box__magnet mbr-box__magnet--center-left">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="mbr-hero animated fadeInUp">
                                            <h1 className="mbr-hero__text">{this.props.title}</h1>
                                            <p className="mbr-hero__subtext">{this.props.subtitle}<br />
                                                {this.props.body} <br />
                                            </p>
                                        </div>
                                        <div className="mbr-buttons btn-inverse mbr-buttons--left">
                                            {this.props.buttons ? this.props.buttons.map((button) =>
                                                <a key={button.label}
                                                   className={button.class}
                                                   href={button.link}
                                                   title={button.title}>{button.label}</a>
                                            ): null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mbr-arrow mbr-arrow--floating text-center">
                        <div className="mbr-section__container container">
                            <a className="mbr-arrow__link" href="#features1-75"><i
                                className="glyphicon glyphicon-menu-down"/></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Cover.propTypes = {
    images: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    imagesRotate: React.PropTypes.bool,
    imagesRotateTime: React.PropTypes.number,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    body: React.PropTypes.string,
    buttons: React.PropTypes.arrayOf(React.PropTypes.object)
};

Cover.defaultProps = {
    imagesRotate: true,
    imagesRotateTime: 3
};

export default Cover;
