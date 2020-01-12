import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';


export default function ProgressCard({name}) {
    return (
        <div className="card progressCard">
            <h4>{name}</h4>
            <ProgressBar now={80}/>
            <p className="pending">
                {name ==='Orders' ? 'Pending ' : 'Un-reconcilled '}{name}: 
                <span>20</span>
            </p>
            <p className="reconcilled">Reconcilled {name}: <span>80</span></p>
            <p className="total">Total {name}: <span>100</span></p>
        </div>
    )
}
