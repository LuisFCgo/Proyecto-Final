import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Hotel_Uk extends Component {
    state = {
      hotel_uk: [
        {
          nombre: 'Lancaster Hotel',
          pais: 'United Kingdom',
          imagen: 'Lancaster',
          calificacion: 'Exelent',
          precio: '90 euros/night'
        },
        {
          nombre: 'Hampton Hotel',
          pais: 'United Kingdom',
          imagen: 'Hampton',
          calificacion: 'Very good',
          precio: '150 euros/night'
        },
        {
          nombre: 'Chesterfield Hotel',
          pais: 'United Kingdom',
          imagen: 'Chesterfield',
          calificacion: 'Good',
          precio: '100 euros/night'
        },
  
        {
          nombre: 'Ocean Hotel',
          pais: 'United Kingdom',
          imagen: 'Ocean',
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
            this.state.hotel_uk.map((hotel_uk, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <img
                    className='imagen-hotel'
                    src={require(`../img/Hoteles/Hotel-Uk-${hotel_uk.imagen}.jpg`)}
                    alt='Foto de Emma' />
                  <div className='contenedor-texto-testimonio'>
                    <p className='nombre-pais'>
                      <strong>{hotel_uk.pais}</strong>
                    </p><br/>
                    <p className='nombre-testimonio'>
                      <strong>{hotel_uk.nombre}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      <strong>{hotel_uk.calificacion}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      {hotel_uk.precio}
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
  
  
  export default Hotel_Uk;