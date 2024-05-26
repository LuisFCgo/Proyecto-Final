import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Hotel_France extends Component {
    state = {
      hotel_france: [
        {
          nombre: 'Shangri Hotel',
          pais: 'Francia',
          imagen: 'Shangri',
          calificacion: 'Exelent',
          precio: '90 euros/night'
        },
        {
          nombre: 'Maison Hotel',
          pais: 'Francia',
          imagen: 'Maison',
          calificacion: 'Very good',
          precio: '150 euros/night'
        },
        {
          nombre: 'Lutetia Hotel',
          pais: 'Francia',
          imagen: 'Lutetia',
          calificacion: 'Good',
          precio: '100 euros/night'
        },
  
        {
          nombre: 'Royal Hotel',
          pais: 'Francia',
          imagen: 'Royal',
          calificacion: 'Medium',
          precio: '200 euros/night'
        }
  
      ]
  
    };
  
  
    render() {
      return (
        <div className='contenedor-principal'>
          <h1>here´s some of the <span className='resaltado'>rated hotels</span> for you!!</h1>/
          <div className='container'>
          {
            this.state.hotel_france.map((hotel_france, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <img
                    className='imagen-hotel'
                    src={require(`../img/Hoteles/Hotel-Francia-${hotel_france.imagen}.jpg`)}
                    alt='Foto de Emma' />
                  <div className='contenedor-texto-testimonio'>
                  <p className='nombre-pais'>
                      <strong>{hotel_france.pais}</strong>
                    </p><br/>
                    <p className='nombre-testimonio'>
                      <strong>{hotel_france.nombre}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      <strong>{hotel_france.calificacion}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      {hotel_france.precio}
                    </p>
                    <NavLink className="btn btn-warning"  type="submit" to="/pago">Payment</NavLink>
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
  
  
  export default Hotel_France;