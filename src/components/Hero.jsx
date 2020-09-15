import React from 'react';

import ilustracion from '../assets/static/ilustracion.svg';
import '../assets/styles/components/Hero.scss';

const Hero = () => (
    <div className="Hero__container">
        <div className="Hero__background">
            <div className="Hero__content">
                <div className="Hero__title">
                    {/* <h1>CovidMX</h1> */}
                    <h2>Conoce el estado actual del Covid 19 en México.</h2>
                    <p className="Hero__hashtag">#QuédateEnCasa</p>
                </div>
                <div className="Hero__img">
                    <img src={ilustracion} alt="" className="Hero__img" />
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
