import React from 'react';

import "./ShoeDisplay.css"

function ShoeDisplay(props){
    return (
    <div>
        <div className="card">
                <h5 className="card-title">{props.name}</h5>
            <img src={props.image} className="card-img-top shoe-display" alt="..." />
            <div className="card-body">
                <p className="card-text">Price: ${props.price}</p>
                <p className="card-text"><small className="text-muted">Colors: 
                 {props.colors.join(', ')}</small></p>
            </div>
        </div>
    </div>

    )
}

export default ShoeDisplay;