import React from 'react';
import Fade from 'react-reveal';

const PlansSection = () => {
    return ( 
        <section className="section has-background-white-ter">
            <div className="container">
                <div className="column has-text-centered">
                    <Fade>
                    <h3 className="title is-2 is-size-3-mobile">let's take a look <span className="icon little-margin-left has-text-red"><i className="fas fa-glasses"></i></span></h3>
                    <p className="subtitle is-3 is-size-4-mobile">if the average meal costs around 550-600 points...</p>
                    </Fade>
                </div>

                <div className="columns margin-top">
                        <div className="column has-text-centered">
                            <div className="box has-background-white box-shadow">
                                <h3 className="title is-size-3 is-size-4-mobile has-text-centered">foodplus+ basic</h3><br/>
                                <p className="subtitle is-4">15,000 points <br/> around 25 meals <br/> $34.99/month</p>
                                <button className="button is-large has-text-white has-background-red">Go</button>
                            </div> 
                        </div>
                        <div className="column has-text-centered">
                            <div className="box has-background-red popular">
                                <h3 className="title is-size-3 is-size-4-mobile has-text-white has-text-centered">foodplus+ premium</h3><br/>
                                <p className="subtitle has-text-white is-4">25,000 points <br/> around 40 meals <br/> $49.99/month</p>
                                <button className="button is-large has-text-white has-background-red">Go</button>
                            </div> 
                        </div>
                        <div className="column has-text-centered">
                            <div className="box has-background-white box-shadow">
                                <h3 className="title is-size-3 is-size-4-mobile has-text-centered">foodplus+ platinum</h3><br/>
                                <p className="subtitle is-4">50,000 points <br/> around 80 meals <br/> $79.99/month</p>
                                <button className="button is-large has-text-white has-background-red">Go</button>
                            </div> 
                        </div>
                </div>
            </div>
        </section>
    );
}
 
export default PlansSection;