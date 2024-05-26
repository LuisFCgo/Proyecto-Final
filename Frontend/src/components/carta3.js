import React, { Component } from 'react';
import madrid from '../img/madrid.png';
import florencia from '../img/florencia.png';
import francia from '../img/francia.png'
import london from '../img/londres.png';
import { NavLink } from 'react-router-dom';


class Carta3 extends Component {
    render() {
        return (
            <div class="container containerc d-flex justify-content-center">
                <div class="row">
                    <h1>Exclusive <span class="resaltado">deals & discount</span></h1>
                    <p>Discover our fantastic early booking discounts & star planning your journey.</p>
                    <div class="row  row-t">
                        <div class="col-3">
                            <div class="card">
                            <NavLink to="/Hotel_Spain"><img src={madrid} class="card-img-top" alt="Madrid"/></NavLink>
                                    <div class="card-body">
                                        <h5 class="card-title">Madrid</h5>
                                        <p class="card-text3">spain</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                            <NavLink to="/Hotel_Italy"><img src={florencia} class="card-img-top" alt="Florencia"/></NavLink>
                                    <div class="card-body">
                                        <h5 class="card-title">Firenze</h5>
                                        <p class="card-text3">Italy</p>                                        
                                    </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                            <NavLink to="/Hotel_France"><img src={francia}class="card-img-top" alt="Francia"/></NavLink>
                                    <div class="card-body">
                                        <h5 class="card-title">Paris</h5>
                                        <p class="card-text3">France</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card">
                            <NavLink to="/Hotel_Uk"><img src={london} class="card-img-top" alt="londres"/></NavLink>
                                    <div class="card-body">
                                        <h5 class="card-title">London</h5>
                                        <p class="card-text3">UK</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Carta3;