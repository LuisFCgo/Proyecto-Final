import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Hotel_Spain extends Component {
    state = {
      hotel_spain: [
        {
          nombre: 'Seventhy Hotel',
          pais: 'España',
          imagen: 'Seventhy',
          calificacion: 'Exelent',
          precio: '90 euros/night'
        },
        {
          nombre: 'Catalonia Hotel',
          pais: 'España',
          imagen: 'Catalonia',
          calificacion: 'Very good',
          precio: '150 euros/night'
        },
        {
          nombre: 'Artiem Hotel',
          pais: 'España',
          imagen: 'Artiem',
          calificacion: 'Good',
          precio: '100 euros/night'
        },
  
        {
          nombre: 'Gravina Hotel',
          pais: 'España',
          imagen: 'Gravina',
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
            this.state.hotel_spain.map((hotel_spain, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <img
                    className='imagen-hotel'
                    src={require(`../img/Hoteles/Hotel-Espania-${hotel_spain.imagen}.jpg`)}
                    /*alt='Foto de Emma'*/ />
                  <div className='contenedor-texto-testimonio'>
                    <p className='nombre-pais'>
                      <strong>{hotel_spain.pais}</strong>
                    </p><br/>
                    <p className='nombre-testimonio'>
                      <strong>{hotel_spain.nombre}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      <strong>{hotel_spain.calificacion}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      {hotel_spain.precio}
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
  
  
  export default Hotel_Spain;