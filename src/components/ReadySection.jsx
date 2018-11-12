import React from 'react';
import Fade from 'react-reveal';

const ReadySection = () => {
    return ( 
        <section className="section has-background-red">
            <div className="container has-text-centered">
                <Fade left>
                <p className="title is-2 is-size-3-mobile has-text-white">dinner's almost ready</p>
                </Fade>
                <Fade right>
                <p className="subtitle is-3 is-size-4-mobile has-text-white">what are you having?</p>
                </Fade>
            </div>
        </section>
    );
} 

export default ReadySection;