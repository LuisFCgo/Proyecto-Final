import React, {Component} from 'react';
import Principal from './Principal';
import Carta1 from './carta1';
import Carta2 from './carta2';
import Carta3 from './carta3';
import Carta4 from './carta4';
import Abouts from './abouts';
import Subcripter from './Subcripter';
import Carta5 from './carta5';

class Home extends Component {
  render(){
    return (
      <div className='home'>
        <Principal />
        <Carta1/>
        <Carta2/>
        <Carta3/>
        <Carta4/>
        <Abouts/>
        <Carta5/>
        <Subcripter/>
      </div>
    );
  }
}

export default Home;