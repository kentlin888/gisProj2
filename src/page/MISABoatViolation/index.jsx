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

// import MISACarInfoTable from "./MISACarInfoTable.jsx";
import EasyTable from '../../component/EasyTable/EasyTable.jsx'

const pageTitle = "漁船違規紀錄"
// let sampleData = {
//     UID: "CT S006650", BoatName: "王泰隆", StationNameOut: "永新漁港安檢所"
//     , StationDateOut: "2020/10/01", StationNameIn: "永新漁港安檢所", StationDateIn: "2020/10/01",
//     StationDateIn2: "2020/10/01"
// }
let defaultColumns = [
    { title: '受處分漁船ID', value:"CT 25632"},
    { title: '受處分人中文姓名', value:"王大明"},
    { title: '身分證字號', value:"A120589521"},
    { title: '性別', value:"男"},
    { title: '生日', value:"71/03/04"},
    { title: '地址', value:"花蓮市中正路52號"},
    { title: '查獲安檢所', value:"富基漁港安檢所"},
    { title: '處分單位核准日期', value:"104/03/23"},
    { title: '處分單位發文文號', value:"處份字第1252531號"},
    
    
]


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
                        {/* <span style={spanIcon} ><GetAppIcon style={iconStyle} /><span>匯出資料</span></span> */}
                    </div>
                    

                    {/* <div>
                        <span style={spanIcon} >
                            <Print style={iconStyle} />列印XXXXX
                            <span style={{ color: "blue" }}>列印XXXXX</span>
                        </span>
                    </div> */}
                    {/* <div style={{ display: "flex" }}>
                        <span ><Print style={iconStyle} />列印</span>
                        <span ><GetAppIcon style={iconStyle} />匯出資料</span>
                    </div> */}
                    <div><EasyTable defaultColumns={defaultColumns} countEachColumn={4}/></div>
                    {/* <div><MISACarInfoTable /></div> */}

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
