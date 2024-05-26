import React, { Component } from 'react';
import romaItalia from '../img/romaItalia.png';
import londonUk from '../img/londonUk.png';
import osakaJapon from '../img/osakaJapon.png';

class Carta4 extends Component {
    render() {
        return (
            <div className="containerc containerc d-flex justify-content-center">
                <div className="row">
                    <h1>Best <span className="resaltado">vacation plan</span></h1>
                    <p>Plan your vacation with our travel agency. Choose armong hundreds of all-inclusive offers!.</p>
                    <div className="row row-t">
                        <div className="col-4">
                            <div className="card">
                                <img src={romaItalia} className="card-img-top" alt="ROMA"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Roma, Italy</h5>
                                        <p className="card-text3">10 Days Trip</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={londonUk} className="card-img-top" alt="UK"/>
                                    <div className="card-body">
                                        <h5 className="card-title">London, uk</h5>
                                        <p className="card-text3">7 Days Trip</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={osakaJapon} className="card-img-top" alt="Japon"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Osaka, Japon</h5>
                                        <p className="card-text3">10 Days Trip</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carta4;