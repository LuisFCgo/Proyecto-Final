import React, {Component} from 'react';
import Resourt from "../img/resourt.png";
import Choza from "../img/chosa-mar.png";
import Vistamar from "../img/vistamar.png";
import Polinesia from "../img/polinesia.png";

class Carta5  extends Component {
    render() {
        return (
            <div className="container containerc d-flex justify-content-center" >
                <div className="row">
                    <h1>Get update with <span className="resaltado">latest blog</span></h1>
                    <div className="row  row-t">
                        <div className="col-3">
                            <div className="card">
                                <img src={Resourt} className="card-img-top" alt="#" />
                                <div className="card-body">
                                    <h5 className="card-title text-start">The Amazing Difference a Year of Travelling.</h5>
                                    <p className="card-text3 text-start">july 27, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={Choza} className="card-img-top" alt="#" />
                                <div className="card-body">
                                    <h5 className="card-title text-start">Travel far enough, you meet yourself.</h5>
                                    <p className="card-text3 text-start">July 27, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={Vistamar} className="card-img-top" alt="#" />
                                <div className="card-body">
                                    <h5 className="card-title text-start">How to Save Money While Visting Africa.</h5>
                                    <p className="card-text3 text-start">July 27, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={Polinesia} className="card-img-top" alt="#" />
                                <div className="card-body">
                                    <h5 className="card-title text-start">Reflectios on 5 Months of Travel: Time to Hang</h5>
                                    <p className="card-text3 text-start">July 27, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div >

        )
    }
}


export default Carta5;
