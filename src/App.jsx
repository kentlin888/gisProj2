import React from "react";
import Menu from "./component/menu/Menu.jsx";
import navFeatures from './navFeatures.js';
import ListIcon from '@mui/icons-material/List';
import { container } from "./styles/indexStyles.js";
import IndexPage from "./page/IndexPage.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
        <Router>
            <div style={container}>
                <div style={{ position: "relative", background: "#457b9d", height: "30vh" }}>
                    <ListIcon style={{ position: "absolute", top: "16vh", left: "8%", color: "white", fontSize: "3rem" }} />
                    <span style={{ position: "absolute", top: "22vh", left: "7%", color: "white", fontSize: "1.6rem" }}>案件清單</span>
                </div>
                <div><Menu features={navFeatures} backgroundColor={bgc} color={color} width={w} /> </div>
                <div style={{ borderRadius: "14px", backgroundColor: "rgb(255,255,255,1)", position: "absolute", top: "12vh", left: "20%", width: "77%", minHeight: "90vh" }}>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Home" component={Home} />
                        
                    </Switch>
                </div>
            </div>
        </Router>

    </React.Fragment>)
}