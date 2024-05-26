import React, { Component } from 'react';

class Subcripter extends Component {
    render() {
        return (
            <div id="container-sub" className="container text-center m-6">
                <div className="row m-3 orange-background">
                    <div className="col"></div>
                    <div className="col-6 align-self-center">
                        <h2 className="text-light">Subscribe and get exclusive deals & offer</h2>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row m-3 orange-background">
                    <div className="col"></div>
                    <div className="col-6 pt-3">
                        <form className="d-flex"  role="search" >
                            <input classNameName="form-control me-2" type="search" placeholder="Enter you mail" aria-label="Search"/>
                            <button className="btn btn-warning text-" type="submit">Subscribe</button>
                        </form>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subcripter;