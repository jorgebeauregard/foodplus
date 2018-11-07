import React from 'react';
import Fade from 'react-reveal/Fade';


const PointsSection = () => {
    return ( 
        <section className="section has-background-red">
            <div className="container">
                <div className="columns margin-top">
                    <Fade left>
                    <div className="column">
                        <h2 className="title is-2 has-text-white">restaurants charge you in points</h2>
                        <p className="subtitle is-4 has-text-white">how many points will you get this month?</p>
                        <br/>
                        <p className="is-size-6 has-text-white">*credit card is required and will be charged monthly</p>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className="column has-text-right  has-text-left-mobile">
                        <p className="subtitle has-text-white is-2 has-text-weight-bold">15,000 points</p>
                        <p className="subtitle has-text-white is-2 has-text-weight-bold">25,000 points</p>
                        <p className="subtitle has-text-white is-2 has-text-weight-bold">40,000 points</p>
                        <button className="button is-large has-text-white has-background-red">Go</button>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
 
export default PointsSection;