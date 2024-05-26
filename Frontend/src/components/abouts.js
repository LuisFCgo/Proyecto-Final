import React, { Component } from 'react';
import man from '../img/icon-men.png'
class Abouts extends Component {
    render() {
        return (
            <div className="container " id="container-1">
                <div className="row g-0 justify-content-center align-items-center row-t" >
                    <div className="col-md-6 p-3">
                        <div className="div-body">
                            <h1 className="fs-1 text-start">What the people say <span className="resaltado">about us</span></h1>
                            <p className="text-start">Our Clients send us of smilies with our services and we love them.</p>

                        </div>
                    </div>
                    <div className="col-md-6">
                            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                                <h5>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</h5>
                                <p className="fw-bolder text-start">
                                <img src={man} className='ico-man' alt="icoman"/><br/>
                                    Mike Taylor
                                </p >
                                <p className="fw-light text-start">Lohore, Pakistan</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abouts;