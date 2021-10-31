import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import {Print} from '@material-ui/icons';
import ExampleTable from "./component/table/ExampleTable.jsx";
const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);
const iconStyle = {
    background: "#457b9d", color: "white", padding: "5px", fontSize: "3rem", borderRadius: "5px", margin: "auto 5px" 
}
const spanIcon = {
   border:"red 2px solid",display:"inline-block", background: "#457b9d", color: "white", padding: ".8rem", borderRadius: "5px", margin: "auto 5px",height:"4rem"
}
export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <div style={{ border: "black 2px solid", borderRadius: "5px", margin: ".5rem", width: "85%" }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">Collapsible Group Item #1
                        </AccordionSummary></div>
                    <div><AutorenewIcon style={iconStyle} /></div>
                    <div><DeleteIcon style={iconStyle} /></div>
                </div>
                <AccordionDetails style={{display:"flex", flexDirection:"column",}}>
                <div><span style={spanIcon} ><Print style={iconStyle} /><span>Text</span></span></div>
                    <div><ExampleTable /></div>
                    
                </AccordionDetails>
            </Accordion>

        </div>
    );
}


// import React, { PureComponent } from 'react'

// export default class About extends PureComponent {
//     render() {
//         return (
//             <div>
//                 About
//             </div>
//         )
//     }
// }
