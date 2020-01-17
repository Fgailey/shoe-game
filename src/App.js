import React, { Component } from 'react';
import './App.css';
import ShoeDisplay from './components/shoe/ShoeDisplay';
import ShoeSpec from './components/shoe/ShoeSpecs';
import Navbar from './components/navbar/Navbar';
import shoes from './shoes.json'

class App extends Component{

  state = {
    shoes
  };


  render(){
    return (
      <div>
        <Navbar />
        <div className="card-deck">

        {this.state.shoes.map(shoe => 
        <ShoeDisplay 
        key={shoe.id}
        id={shoe.id}
        name={shoe.name}
        price={shoe.price}
        colors={shoe.colors}
        image={shoe.image}
        />
        )}
        </div>
        <ShoeSpec />
      </div>
    );
  }
}

export default App;
