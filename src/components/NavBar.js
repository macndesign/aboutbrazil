import React from 'react';

const NavBar = React.createClass({
    render() {
        const items = this.props.menuItems.map((item) => (
            <li className="mbr-navbar__item" key={item.name}>
                <a className="mbr-buttons__link btn text-white" href={item.link}>{item.name}</a>
            </li>
        ));

        const styleLang = {cursor: 'pointer', color: '#fff', border: 'solid 1px', borderColor: 'transparent', fontSize: 9, padding: '2px 4px'};

        return (
            <section
                className="mbr-navbar mbr-navbar--freeze mbr-navbar--absolute mbr-navbar--transparent mbr-navbar--sticky mbr-navbar--auto-collapse"
                id="menu-74">
                <div className="mbr-navbar__section mbr-section">
                    <div className="mbr-section__container container">
                        <div className="mbr-navbar__container">
                            <div className="mbr-navbar__column mbr-navbar__column--s mbr-navbar__brand">
                                <div className="mbr-navbar__brand-link mbr-brand mbr-brand--inline">
                                    <div style={{position: 'fixed', top: 0}}>
                                        <span style={this.props.lang === 'ptBr' ? {...styleLang, borderColor: '#fff'} : {...styleLang}}
                                              onClick={this.props.onPortugueseClick}>
                                            {/*<img src='/assets/images/br-icon.png'
                                                 style={{border: this.props.lang === 'ptBr' ?
                                                        'solid 1px #fff' : 'transparent'}}
                                                 alt="pt-BR"/>&nbsp;*/}
                                                 PORTUGUÊS
                                        </span>
                                        <span style={this.props.lang === 'enUs' ? {...styleLang, borderColor: '#fff'} : {...styleLang}}
                                              onClick={this.props.onEnglishClick}>
                                            {/*<img src='/assets/images/us-icon.png'
                                                 style={{border: this.props.lang === 'enUs' ?
                                                        'solid 1px #fff' : 'transparent'}}
                                                 alt="en-US"/>&nbsp;*/}
                                                 ENGLISH
                                        </span>
                                        <span style={this.props.lang === 'sp' ? {...styleLang, borderColor: '#fff'} : {...styleLang}}
                                              onClick={this.props.onSpanishClick}>
                                            {/*<img src='/assets/images/es-icon.png'
                                                 style={{border: this.props.lang === 'sp' ?
                                                        'solid 1px #fff' : 'transparent'}}
                                                 alt="es-ES"/>*/}
                                                 ESPAÑOL
                                        </span>
                                    </div>
                                    <span className="mbr-brand__name">
                                        <a className="mbr-brand__name text-white" href="#/">{this.props.name}</a>
                                    </span>
                                    <span className="mbr-brand__logo">
                                        <a href="/">
                                            <img className="mbr-navbar__brand-img mbr-brand__img"
                                                 src="assets/images/about-brazil-logo.png" alt="About Brazil"/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="mbr-navbar__hamburger mbr-hamburger text-white"><span className="mbr-hamburger__line"></span></div>
                            <div className="mbr-navbar__column mbr-navbar__menu">
                                <nav className="mbr-navbar__menu-box mbr-navbar__menu-box--inline-right">
                                    <div className="mbr-navbar__column">
                                        <ul className="mbr-navbar__items mbr-navbar__items--right mbr-buttons mbr-buttons--freeze mbr-buttons--right btn-decorator mbr-buttons--active">
                                            {items}
                                        </ul>
                                    </div>
                                    <div className="mbr-navbar__column">
                                        <ul className="mbr-navbar__items mbr-navbar__items--right mbr-buttons mbr-buttons--freeze mbr-buttons--right btn-inverse mbr-buttons--active">
                                            <li className="mbr-navbar__item">
                                                <a className="mbr-buttons__btn btn btn-default"
                                                   href="#contacts2-57">
                                                    {this.props.contact}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});

export default NavBar;
