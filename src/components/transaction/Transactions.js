import React, {useState} from 'react';

import chartIcon from '../../assets/icons/chart.svg';

import './Transactions.css';

export default function Transactions() {
    const [state] = useState([
        {
            name: 'Daily Transaction Volume',
            number: '2,342',
        },
        {
            name: 'Daily Transaction Value',
            number: '₦4,000,000',
        },
        {
            name: 'Total Transaction Volume',
            number: '452,000',
        },
        {
            name: 'Total Transaction Value',
            number: '₦4,000,000',
        },
    ]);

    return (
        <div className="row">
            {state.map((trans, index) =>
                <div key={index} className="col-md-3 card-trans">
                    <div className="card flex-md-row card-transaction">
                        <div className="inner-card">
                            <p className="card-name">{trans.name}</p>
                            <p className="card-number">{trans.number}</p>
                        </div>
                        <img alt="chart" src={chartIcon} />
                    </div>
                </div>
            )}           
        </div>
    )
}
