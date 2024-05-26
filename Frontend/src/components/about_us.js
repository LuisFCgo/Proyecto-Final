import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class About_Us extends Component {
    state = {
      about: [
        {
          title: 'Who we are',
          paragraph:'We are a company with more than 10 years in the market of the experieces about trips around the world, improving each day the relations with customers and new users'
        },
        {
          title: 'Our vision',
          paragraph:'Our vision is will bring our experience to all people who wants unforgettable trips around the world and love to travel to different amazing places '
        }  
      ]
  
    };
  
  
    render() {
      return (
        <div className='contenedor-principal'>
          <div className='container'>
          {
            this.state.about.map((about, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <div className='contenedor-texto-testimonio'>                 
                  <p className='nombre-title'>
                      <strong>{about.title}</strong>
                    </p>
                    <p className='nombre-parrafo'>
                      <strong>{about.paragraph}</strong>
                    </p>
                  </div>
                </div>
              )
  
            })
          }
          </div>
  
        </div>
      );
    }
  
  
  }
  
  
  export default About_Us;