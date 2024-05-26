import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Hotel_Italy extends Component {
    state = {
      hotel_italia: [
        {
          nombre: 'Artemide Hotel',
          pais: 'Italy',
          imagen: 'Artemide',
          calificacion: 'Exelent',
          precio: '90 euros/night'
        },
        {
          nombre: 'Barroco Hotel',
          pais: 'Italy',
          imagen: 'Barroco',
          calificacion: 'Very good',
          precio: '150 euros/night'
        },
        {
          nombre: 'Calimala Hotel',
          pais: 'Italy',
          imagen: 'Calimala',
          calificacion: 'Good',
          precio: '100 euros/night'
        },
  
        {
          nombre: 'Moresco Hotel',
          pais: 'Italy',
          imagen: 'Moresco',
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
            this.state.hotel_italia.map((hotel_italia, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <img
                    className='imagen-hotel'
                    src={require(`../img/Hoteles/Hotel-Italia-${hotel_italia.imagen}.jpg`)}
                    alt='Foto de Emma' />
                  <div className='contenedor-texto-testimonio'>
                  <p className='nombre-pais'>
                      <strong>{hotel_italia.pais}</strong>
                    </p><br/>
                    <p className='nombre-testimonio'>
                      <strong>{hotel_italia.nombre}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      <strong>{hotel_italia.calificacion}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      {hotel_italia.precio}
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
  
  
  export default Hotel_Italy;