import React, { Component } from 'react';

class Carta1 extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center" >
                <div className="card">
                    <div className="row">
                        <div className="col-3">
                            <div className="card-body">
                                <h5 className="card-title">Location</h5>
                                <p className="card-text">Where are you going</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-body">
                                <h5 className="card-title">Date</h5>
                                <p className="card-text">when will go</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-body">
                                <h5 className="card-title">Guest</h5>
                                <p className="card-text">Number of guest</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <a href="#" className="btn btn-warning">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carta1;