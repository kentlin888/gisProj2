import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import Print from '@material-ui/icons/Print';
import GetAppIcon from '@material-ui/icons/GetApp';
import Checkbox from '@material-ui/core/Checkbox';

import MISACarViolationTable from "./MISACarViolationTable.jsx";

const pageTitle = "車輛違規紀錄"
const spanIcon = {
    display: "inline-block", background: "#337ab7", color: "white", padding: ".8rem", borderRadius: "5px", margin: "auto 5px", height: "4rem"
}
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
    background: "#337ab7", color: "white", padding: "5px", fontSize: "3rem", borderRadius: "5px", margin: "auto 5px"
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
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
                            <Checkbox checked color="primary" /><div style={{ display: "flex", alignItems: "center" }}>{`${pageTitle} (查詢結果)`}</div>
                        </AccordionSummary></div>
                    <AutorenewIcon style={iconStyle} />
                    <DeleteIcon style={iconStyle} />
                </div>
                <AccordionDetails style={{ display: "flex", flexDirection: "column", }}>
                    <div style={{ marginBottom: "20px" }}>
                        <span style={spanIcon} ><Print style={iconStyle} /><span>列印</span></span>
                        <span style={spanIcon} ><GetAppIcon style={iconStyle} /><span>匯出資料</span></span>
                    </div>
                    <div><MISACarViolationTable /></div>


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
