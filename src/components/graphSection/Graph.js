import React from 'react';

import graph from '../../assets/icons/graph.svg';

function Graph(){
    return (
        <div className="card graph-card">
            <div className="card-top">
                <h2>Today: 5, Aug 2018</h2>
                <div className="d-flex">
                    <select className="graph-select mr-5">
                        <option>1 Jan - 1 Jun</option>
                        <option>1 Jun - 1 Dec</option>
                    </select>
                    <div className="btn-nav">
                        <button className="btn btn-light mr-2">&#60;</button>
                        <button className="btn btn-light">&#62;</button>
                    </div>
                </div>
            </div>
            <img src={graph} alt="graph" />
        </div>
    )
}

export default Graph;
