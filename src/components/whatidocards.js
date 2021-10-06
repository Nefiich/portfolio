import React from 'react';

function WhatIDoCard(props){
    return(
      <div className="card">
        {props.icon}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    );
  }

export default WhatIDoCard;