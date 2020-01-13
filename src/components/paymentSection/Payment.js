import React from 'react';

import search from '../../assets/icons/search.svg';
import DataTable from './DataTable';


export default function Payment() {
    return (
        <div className="mt-4" style={{paddingRight: '15px'}}>
            <h2 className="payment">Payments</h2>
            <div className="show-payment">
                <p> Showing
                     <select>
                        <option>10</option>
                        <option>20</option>
                    </select>
                    out of 500 payments
                </p>
                <form>
                    <img src={search} alt="search" style={{marginRight: '-7px'}} />
                    <input type="text" placeholder="Search..." className="search" />
                </form>
                <div>
                    Show
                    <select>
                        <option>All</option>
                        <option>Reconcilled</option>
                        <option>Un-Reconcilled</option>
                        <option>Settled</option>
                        <option>Unsettled</option>
                    </select>
                </div>
            </div>
            <DataTable />
        </div>
    )
}
