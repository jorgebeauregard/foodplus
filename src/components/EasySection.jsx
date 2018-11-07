import React from 'react';
import Fade from 'react-reveal/Fade';

const EasySection = () => {
    return ( 
        <section className="section has-background-white-ter">
            <div className="container">
                <div className="columns margin-top">
                    <div className="column has-text-centered">
                        <Fade top>
                        <h2 className="title is-1 is-size-2-mobile">
                            easy as <strong className="has-text-red">1-2-3</strong>
                        </h2>
                        </Fade>
                    </div>
                </div>

                <Fade bottom>
                <div className="columns margin-top">
                    <div className="column has-text-centered">
                        <div className="box has-background-red box-shadow">
                            <h3 className="title is-size-2 is-size-3-mobile has-text-white has-text-centered">step 1</h3>
                            <span class="icon is-large ">
                                <i class="fas fa-3x fa-id-card has-text-white"></i>
                            </span><br/><br/>
                            <p className="subtitle has-text-white is-4">sign up to receive <br/> your card <br/><br/></p>
                        </div> 
                    </div>

                    <div className="column has-text-centered">
                        <div className="box has-background-red box-shadow">
                            <h3 className="title is-size-2 is-size-3-mobile has-text-white has-text-centered">step 2</h3>
                            <span class="icon is-large ">
                                <i class="fas fa-3x fa-mobile-alt has-text-white"></i>
                            </span><br/><br/>
                            <p className="subtitle has-text-white is-4">download the app and keep <br/> an eye on the restaurants <br/> that interest you</p>
                        </div> 
                    </div>

                    <div className="column has-text-centered">
                        <div className="box has-background-red box-shadow">
                            <h3 className="title is-size-2 is-size-3-mobile has-text-white has-text-centered">step 3</h3>
                            <span class="icon is-large ">
                                <i class="fas fa-3x fa-dollar-sign has-text-white"></i>
                            </span><br/><br/>
                            <p className="subtitle has-text-white is-4">dine out paying <br/>with your points<br/><br/></p>
                        </div> 
                    </div>

                </div> 
                </Fade>
            </div>          
        </section>
    );
}
 
export default EasySection;