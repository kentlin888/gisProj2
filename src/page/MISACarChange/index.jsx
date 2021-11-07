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

const pageTitle = "車籍變更紀錄"
// let sampleData = {
//     UID: "CT S006650", BoatName: "王泰隆", StationNameOut: "永新漁港安檢所"
//     , StationDateOut: "2020/10/01", StationNameIn: "永新漁港安檢所", StationDateIn: "2020/10/01",
//     StationDateIn2: "2020/10/01"
// }
let defaultColumns = [
    { title: '車主姓名', value:"王小明"},
    { title: '車主生日', value:"75/11/21"},
    { title: '車主證號', value:"S120589521"},
    { title: '車主地址',  value:"新竹市光復路22號"},
    { title: '住居或就業處地址',  value:"台北市北投區中央路13號"},

    { title: '車牌號碼', value:"GFB-5521"},
    { title: '廠牌名稱',  value:"豐田"},
    { title: '出廠年月',  value:"101/03"},    
    { title: '顏色',  value:"白"},
    { title: '車種',  value:"自用小客車"},
    { title: '總排氣量(馬力)',  value:"1399cc"},

    { title: '發照日期',  value:"101/05/04"},
    { title: '最近過戶日期',  value:"109/03/14"},
    { title: '牌照狀態異動日',  value:"103/02/03"},
    
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
