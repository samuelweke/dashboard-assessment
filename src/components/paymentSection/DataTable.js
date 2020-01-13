import React, {useState} from 'react';

import itemIcon from '../../assets/icons/itemtype.svg';

export default function DataTable() {
    const [btnCategory] = useState([
        'Pending', 'Un-reconcilled', 'Reconcilled', 'Reconcilled',
        'Un-reconcilled', 'Pending','Pending', 'Un-reconcilled', 'Reconcilled'
    ]);

    return (
        <div className="mt-4">
            <table className="table">
                <thead className="thead">
                    <tr>
                        <th>Item Type</th>
                        <th>Price</th>
                        <th>Transaction No</th>
                        <th>Time</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {btnCategory.map(btn => 
                       <tr>
                            <td>
                                <img src={itemIcon} alt="icon" style={{marginRight: '20px'}}/>
                                Apple Mac Book 15” 250 SSD 12GB
                            </td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <td>
                                <button className={btn}>
                                    <svg 
                                        width="9" height="9" 
                                        viewBox="0 0 9 9" fill="none" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4.5" cy="4.5" r="4.5"/>
                                    </svg>
                                    {btn}
                                </button>
                            </td>
                        </tr>
                   )}
                </tbody>
            </table>
        </div>
    )
}
