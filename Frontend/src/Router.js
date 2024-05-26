import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Barra from './components/com-nav';

import home from './components/home';
import login from './components/login';
import register from './components/register';
import blog from './components/blogger';
import Carta3 from './components/carta3';
import Pago from './components/pago';
import Hotel_Italy from './components/hotels_italy';
import Hotel_France from './components/hotels_france';
import Hotel_Uk from './components/hotels_uk';
import Hotel_Spain from './components/hotels_spain';
import About_Us from './components/about_us';
import tour from './components/tour'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Barra />
                <Routes>
                    <Route exact path='/' Component={home} />
                    <Route exact path='/home' Component={home} />
                    <Route exact path='/login' Component={login} />
                    <Route exact path='/blog' Component={blog} />
                    <Route exact path='/register' Component={register} />
                    <Route exact path='/Pago' Component={Pago} />
                    <Route exact path='/Hotel_Italy' Component={Hotel_Italy} />
                    <Route exact path='/Hotel_France' Component={Hotel_France} />
                    <Route exact path='/Hotel_Uk' Component={Hotel_Uk} />
                    <Route exact path='/Hotel_Spain' Component={Hotel_Spain} />
                    <Route exact path='/destination' Component={Carta3} />
                    <Route exact path='/about_us' Component={About_Us} />
                    <Route exact path='/tour' Component={tour} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;
