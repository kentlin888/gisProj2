import React, { Component, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
//import NavBarHeader from './NavBarHeader.jsx'
import NavBarHeader_GIS from './NavBarHeader_GIS.jsx'
import Table1 from './Table1.jsx'
import Modal1 from './Modal1.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { Router, Route, hashHistory} from 'react-router'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Form_boat1 from './Form_boat1.jsx'
import Form_BoatNotice from './Form_BoatNotice.jsx'
import Form_SuspectQuery from './Form_SuspectQuery.jsx'


const newHistory = createBrowserHistory();
export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarHeader_GIS></NavBarHeader_GIS>
                <div>
                <Router history={newHistory}>
                    <div>
                        {/* <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            
                        </ul>
                        <hr /> */}
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/Form_boat1" component={Form_boat1} />
                        <Route path="/Form_BoatNotice" component={Form_BoatNotice} />
                        <Route path="/Form_SuspectQuery" component={Form_SuspectQuery} />
                        
                        
                        {/* <Route path="/topics" component={Topics} /> */}
                    </div>
                </Router>
                </div>
                
                {/* <Modal1></Modal1> */}
                {/* <Table1></Table1> */}
            </React.Fragment>
        )
    }
}
