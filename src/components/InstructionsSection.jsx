import React from 'react';
import Fade from 'react-reveal/Fade';


const InstructionsSections = () => {
    return (
        <section className="section has-back-ground-white-ter">
            <div className="container">
                <div className="columns margin-top">
                    <div className="column has-text-centered">
                        <Fade top>
                        <h2 className="title is-2">spend your points <strong className="has-text-red">wisely</strong></h2>
                        </Fade>
                        <Fade top>
                        <h3 className="subtitle is-3">begin every month with a fresh start <br/>and spend them as you like</h3>
                        </Fade>
                        <Fade top>
                        <p className="subtitle is-3">no daily limits<br/>100% transparency</p><br/>
                        </Fade>
                        <button className="button is-large has-text-white has-background-red">start using foodplus+ now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default InstructionsSections;