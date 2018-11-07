import React from 'react';
import Fade from 'react-reveal/Fade';

const HeroSection = () => {

    return ( 
        <section className="hero has-background-buffet is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-multiline">
                        <div className="column is-full has-text-centered-mobile">
                            <Fade top>
                            <h1 className="title is-1 has-text-white is-hidden-mobile"><strong>foodplus+</strong></h1>
                            </Fade>
                        </div>
                        <div className="column is-full has-text-centered-mobile">
                            <Fade bottom>
                            <br/>
                            <h1 className="is-size-3 has-text-white">all you can eat <br/>for just $39.99 <br/> a month</h1>
                            </Fade>
                        </div>
                        <div className="column is-full has-text-centered-mobile">
                            <Fade left>
                            <button className="button has-background-red-no-border has-text-white is-large margin-top">see plans</button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default HeroSection;