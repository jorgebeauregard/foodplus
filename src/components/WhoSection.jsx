import React from 'react';
import Fade from 'react-reveal';

const WhoSection = () => {
    return ( 
        <section className="section has-background-red">
            <div className="container">
                <Fade>
                    <div className="column has-text-centered">
                        <h2 className="title is-2 is-size-3-mobile has-text-white">what is foodplus+?</h2>
                    </div>
                    <div className="column has-text-centered margin-top">
                        <p className="subtitle is-3 is-size-4-mobile has-text-white">foodplus+ is a subscription-model service that allows people like you to eat at their favorite restaurants for a monthly fee</p>
                    </div>
                </Fade>
            </div>
        </section>
    );
}
 
export default WhoSection;