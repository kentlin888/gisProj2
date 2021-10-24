import React from "react";
import Menu from "../component/menu/Menu.jsx";
import navFeatures from '../navFeatures.js';
import ListIcon from '@mui/icons-material/List';
import { container } from "../styles/indexStyles.js";
import { Router, Route, hashHistory} from 'react-router'
import { createBrowserHistory } from 'history'
const newHistory = createBrowserHistory();
function Home(){
    return <div>Home2222</div>
}

function About(){
    return <div>About</div>
}

export default () => {
    let bgc = "rgb(230,230,230)";
    let color = "rgb(20,20,20)";
    let w = "20%";

    return (<React.Fragment>
        <div style={container}>
            {/* 上方暗藍色 */}
            <div style={{ position: "relative", background: "#457b9d", height: "30vh" }}>
                <ListIcon style={{ position: "absolute", top: "16vh", left: "8%", color: "white", fontSize: "3rem" }} />
                <span style={{ position: "absolute", top: "22vh", left: "7%", color: "white", fontSize: "1.6rem" }}>案件清單</span>
            </div>
            {/* 左側Menu */}
            <div><Menu features={navFeatures} backgroundColor={bgc} color={color} width={w} /> </div>

            {/* 右側Main Content */}
            <div style={{ borderRadius: "14px", backgroundColor: "rgb(255,255,255,1)", position: "absolute", top: "12vh", left: "20%", width: "77%", minHeight: "120vh" }}>
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
                        {/* <Route path="/Form_boat1" component={Form_boat1} />
                        <Route path="/Form_BoatNotice" component={Form_BoatNotice} />
                        <Route path="/Form_SuspectQuery" component={Form_SuspectQuery} /> */}


                        {/* <Route path="/topics" component={Topics} /> */}
                    </div>
                </Router>

            </div>

        </div>


    </React.Fragment>)
}