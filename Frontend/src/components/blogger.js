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
        testimonio: 'Amazon por haber cumplido con la meta de nuestro proyecto nos dio como agrado un viaje hacia un reourt en las bahamas y fue tan confortable haberlos elegidos fue una esperiencia que no olvidare'
      },
      {
        nombre: 'Kate Winsley',
        pais: 'England',
        imagen: 'Kate',
        cargo: 'England actrees',
        empresa: 'The Regimen',
        testimonio: 'Al presentar el nuevo software diseñado por nuestra compañia se diseño un plan on vacation con el cliente para que se sienta identificado con nuestra compañia'
      },
      {
        nombre: 'Leonardo DiCaprio',
        pais: 'United State',
        imagen: 'Leo',
        cargo: 'American actor',
        empresa: 'TItanic',
        testimonio: 'MI experiencia fue muy relajante ya que al diseñar nuevo proyecto el nivel de stres esuvo por la nubes espor ello que abogue por realizar viaje placentero mientra me dedicaba a desarrollar'
      },

      {
        nombre: 'Winona Laura Horowitz',
        pais: 'United State',
        imagen: 'Ryder',
        cargo: 'American actress',
        empresa: 'Stranger Thing',
        testimonio: 'MI experiencia fue muy relajante ya que al diseñar nuevo proyecto el nivel de stres esuvo por la nubes espor ello que abogue por realizar viaje placentero mientra me dedicaba a desarrollar'
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