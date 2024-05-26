import React, { Component } from "react";
import singup from '../img/singup.png';
import billetera from '../img/Billetera.png';
import gps from '../img/gps.png';

class Carta2 extends Component {
    render() {
        return (
            <div className= "container containerc d-flex justify-content-center">
            <div className="row p-3 mt-6">
                <div className="col-12 m-6">
                    <h1 className="t2 justify-content-center">Thing you need <span className="resaltado">to do</span></h1>
                    <p className="text-justify-center">We ensure that you´ll embark on a perfectctly planed, safe vacation at price you can afford.</p>
                </div>
                <div className="col-4 pt-5">
                    <div className="card card-t">
                        <img src={singup} className="card-img-top " alt="singup"/>
                        <div className="card-body">
                          <h5 className="card-title">Sing Up</h5>
                          <p className="card-text">Complete ail the work associated with planning and processing</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 pt-5 ">
                    <div className="card card-t" >
                        <img src={billetera} className="card-img-top" alt="billetera"/>
                        <div className="card-body">
                          <h5 className="card-title">Worth of Money</h5>
                          <p className="card-text">Affter Successful Acces then book from exclusive deals & pricing</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 pt-5">
                    <div className="card card-t">
                        <img src={gps} className="card-img-top-" alt="gps"/>
                        <div className="card-body">
                          <h5 className="card-title">Exciting Travel</h5>
                          <p className="card-text">Start and explore a wide rangeof exiting travel experience.</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Carta2;