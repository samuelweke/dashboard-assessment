import React, { Component } from 'react';

import Overview from '../../assets/icons/overview.svg';
import wallet1 from '../../assets/icons/pay1.svg';
import wallet2 from '../../assets/icons/wallet2.svg';
import wallet3 from '../../assets/icons/wallet3.svg';
import wallet4 from '../../assets/icons/wallet4.svg';
import order1 from '../../assets/icons/order1.svg';
import order2 from '../../assets/icons/order2.svg';
import order3 from '../../assets/icons/order3.svg';

class SidebarNav extends Component {
    state = {
        categories: [
            {
                title: 'Main',
                body: [{name: 'Overview', svg: Overview,}]
            }, 
            {
                title: 'Payments',
                body: [
                    {   
                        name: 'All Payments',
                        svg: wallet1,
                    },
                    {
                        name: 'Reconcilled Payments',
                        svg: wallet2,
                    },
                    {
                        name: 'Un - Reconcilled Payments',                        
                        svg: wallet3,
                    },
                    {
                        name: 'Manual Settlement',
                        svg: wallet4,
                    },
                ]
            },  
            {
                title: 'Order',
                body: [
                    {
                        name: 'All Orders',
                        svg: order1,
                    },
                    {
                        name: 'Pending Orders',
                        svg: order2,
                    },
                    {
                        name: 'Reconcilled Orders',
                        svg: order3,
                    },
                ]
            }, 
        ]
    }

    render() { 
        return ( 
            this.state.categories.map((category, index) => 
                <React.Fragment  key={index}>
                    <li className="nav-category"> {category.title}</li>
                     {category.body.map((body, index) =>
                        <li key={index} className="nav-body">
                            <a className="nav-link" href="#link">
                                <img src={body.svg} alt="logo" />
                                    {body.name}
                            </a>
                        </li>
                     )}
                </React.Fragment>
            )
         );
    }
}
 
export default SidebarNav;