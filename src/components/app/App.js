import React from 'react';

import NavBar from '../navbar/NavBar';
import Sidebar from '../sidebar/Sidebar';
import Transactions from '../transaction/Transactions';
import GraphSection from '../graphSection/GraphSection';
import Payment from '../paymentSection/Payment';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container-fluid">
        <div className="row"> 
          <Sidebar />
          <div className="col-md-10 dashboard"> 
            <Transactions />
            <GraphSection />
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
