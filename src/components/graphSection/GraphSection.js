import React from 'react';

import Graph from './Graph';
import ProgressCard from './ProgressCard';


export default function GraphSection() {
    return (
        <div className="row mt-4">
            <div className="col-md-8" style={{paddingRight: 0}}>
                <Graph />
            </div>
            <div className="col-md-4" 
                 style={{paddingRight: '32px',
                 paddingLeft: '4px'}}>
                <ProgressCard name="Orders" />
                <ProgressCard name="Payments"/>
            </div>
        </div>
    )
}
