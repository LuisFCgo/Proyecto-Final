import React, { Component } from 'react';

class Bloggers extends Component {
  state = {
    bloggers: [
      {
        nombre: 'Jhonny Deep',
        pais: 'united State',
        imagen: 'Jhonny',
        cargo: 'Actor and musician',
        empresa: 'Pirates of Caribean',
        testimonio: 'I went to trip on a resort in the bahamas and it was so comfortable, it was an unforgettable experience, you should not have doubts to take the first step to travel'
      },
      {
        nombre: 'Kate Winsley',
        pais: 'England',
        imagen: 'Kate',
        cargo: 'England actrees',
        empresa: 'The Regimen',
        testimonio: 'I made a plan on vacation in the riviera maya and i knew a lot of beautiful palces like chichen itza pyramid, it was so wonderful'
      },
      {
        nombre: 'Leonardo DiCaprio',
        pais: 'United State',
        imagen: 'Leo',
        cargo: 'American actor',
        empresa: 'TItanic',
        testimonio: 'It was a fabolus experience, I went on a trip to know a lot of places that only they were whatched through the screen of your home'
      },

      {
        nombre: 'Winona Laura Horowitz',
        pais: 'United State',
        imagen: 'Ryder',
        cargo: 'American actress',
        empresa: 'Stranger Thing',
        testimonio: 'My experience was so relaxing, I trip across europa to the museums and south france beaches, also, I enjoyed of a soccer game in spain. It is very remmended'
      }

    ]

  };


  render() {
    return (
      <div className='contenedor-principal'>
        <h1>here´s what our <span className='resaltado'>customer say about</span> their life on vacation!!</h1>/
        <div className='container'>
        {
          this.state.bloggers.map((blogger, i) => {
            return (
              <div className='contenedor-testimonio'>
                <img
                  className='imagen-testimonio'
                  src={require(`../img/client/testimonio-${blogger.imagen}.png`)}
                  alt='Foto de Emma' />
                <div className='contenedor-texto-testimonio'>
                  <p className='nombre-testimonio'>
                    <strong>{blogger.nombre}</strong> of {blogger.pais}
                  </p>
                  <p className='cargo-testimonio'>
                    {blogger.cargo} en <strong>{blogger.empresa}</strong>
                  </p>
                  <p className='texto-testimonio'>"{blogger.testimonio}"</p>
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


export default Bloggers;
