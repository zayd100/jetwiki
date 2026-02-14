
import { useState } from 'react';

const CardP = ({name,status,country,kills,awards}) => {
    

    return(
        <div className="connect-card" >
            
            <div className="connect-content">
                <h1 className="connect-head">{name}</h1>
                <p className='connect-head'>{status}</p>
                <p className="connect-text">features: {country}</p>
                <p className="connect-text">{awards}</p>
                <p className="connect-project">Confirmed Kills: {kills}</p>
                
            </div>
        </div>
    );
};



export default CardP;