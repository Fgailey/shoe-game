import React, { Component } from "react";
import ShoeDisplay from '../components/shoe/ShoeDisplay';
import ShoeSpec from '../components/shoe/ShoeSpecs';

import shoes from '../shoes.json'

class Store extends Component {
    state = {
        shoes
    }
    render(){
        return (
            <div>
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

export default Store;