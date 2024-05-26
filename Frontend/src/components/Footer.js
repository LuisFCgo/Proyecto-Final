import React, {Component} from 'react';
import Logo from '../img/Logo.png';
import Facebook from '../img/SocialF.png';
import Instagram from '../img/SocialI.png';
import Twitter from '../img/SocialT.png';


class Footer extends Component {
    render() {
        return (
            <footer className="text-center py-3">
            <div className="container-footer p-3">
                <div className="row">
                  <div className="col-md-5">
                    <img src={Logo} alt="logo"/>
                    <p>
                      Book your trip in minute, get full control for much longer
                    </p>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Instagram} alt="Instagrame"/>
                    <img src={Twitter} alt="Twitter"/>
                  </div>
                  
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"className="text-decoration-none color-text">About</a></li>
                            <li><a href="#"className="text-decoration-none color-text">Careers</a></li>
                            <li><a href="#"className="text-decoration-none color-text">Logistic</a></li>
                            <li><a href="#"className="text-decoration-none color-text">Privacy & Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 text-decoration-none">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"className="text-decoration-none color-text" >Help/FAQ</a></li>
                            <li><a href="#"className="text-decoration-none color-text">Press</a></li>
                            <li><a href="#"className="text-decoration-none color-text">Affilates</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-2">
                      <h5>More</h5>
                      <ul className="list-unstyled">
                          <li><a href="#"className="text-decoration-none color-text">Press Centre</a></li>
                          <li><a href="#"className="text-decoration-none color-text">Our Blog</a></li>
                          <li><a href="#"className="text-decoration-none color-text">Low fare tips</a></li>
                          
                      </ul>
                    </div>
                </div>
    
                <div className="row align-items-center pt-5 border-top">
                  <div className="col">
                    <p className="fw-light text-start">Copyright, Trabook 2022. All rights reserved</p>
                  </div>
                  <div className="col">
                    <p className="fw-light text-end">Terms & Conditions.</p>
                  </div>
                </div>
            </div>
          </footer>
        )
    }
}

export default Footer;