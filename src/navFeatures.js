import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const navFeatures = [{
    title: "天幕協查",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "MISA-船隻入出港紀錄",
            icon: "icon",
            path: "/MISABoatInOutHistory"
        },
        {
            listTitle: "MISA車號-車籍資料",
            icon: "icon",
            path: "/MISACarInfo"
        },
        {
            listTitle: "MISA車號-車籍變更紀錄",
            icon: "icon",
            path: "/MISACarChange"
        },
        {
            listTitle: "MISA車號-違規紀錄",
            icon: "icon",
            path: "/MISACarViolation"
        },
        {
            listTitle: "MISA個人-名下車輛紀錄",
            icon: "icon",
            path: "/MISAPersonCarsInfo"
        },
        {
            listTitle: "MISA漁船-基本資料",
            icon: "icon",
            path: "/MISABoatInfo"
        },
        {
            listTitle: "MISA漁船-相關船員",
            icon: "icon",
            path: "/MISABoatCrewsInfo"
        },
        {
            listTitle: "MISA個人-船員基本資料",
            icon: "icon",
            path: "/MISABoatCrewsInfoByPID"
        },
        {
            listTitle: "MISA漁船-違規紀錄",
            icon: "icon",
            path: "/MISABoatViolation"
        },
        {
            listTitle: "About",
            icon: "icon",
            path: "/About"
        },
        {
            listTitle: "List A-3",
            icon: "icon",
            path: "/"
        }



        
    ]
},
{
    title: "案件情資",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "嫌疑人篩選",
            icon: "icon",
            path: "/SuspectFilter"
        },        
    ]
},
{
    title: "ETC系統",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "ETC行車紀錄",
            icon: "icon",
            path: "/EtcHistory"
        },
        {
            listTitle: "拋查",
            icon: "icon",
            path: "/EtcHistoryAPI"
        },
        {
            listTitle: "注偵設定",
            icon: "icon",
            path: "/EtcNotice"
        }
    ]
},

{
    title: "涉案車輛停車系統",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "停車紀錄",
            icon: "icon",
            path: "/CarParkingHistory"
        },
        {
            listTitle: "拋查",
            icon: "icon",
            path: "/CarParkingHistoryAPI"
        },
        {
            listTitle: "注偵設定",
            icon: "icon",
            path: "/CarParkingNotice"
        }
    ]
},

{
    title: "平面道路E-Tag",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "平面行車紀錄",
            icon: "icon",
            path: "/ETagHistory"
        },
        {
            listTitle: "拋查",
            icon: "icon",
            path: "/ETagHistoryAPI"
        },
        {
            listTitle: "注偵設定",
            icon: "icon",
            path: "/ETagNotice"
        }
    ]
},

{
    title: "船隻安檢",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "船隻進出港紀錄",
            icon: "icon",
            path: "/BoatHistory",
        },
        // {
        //     listTitle: "拋查",
        //     icon: "icon",
        //     path: "/"
        // },
        {
            listTitle: "注偵設定",
            icon: "icon",
            path: "/BoatNotice"
        }
    ]
},

{
    title: "推播管理中心",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "List C-1",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List C-2",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List C-3",
            icon: "icon",
            path: "/"
        }
    ]
},


{
    title: "地理資訊",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "List C-1",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List C-2",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List C-3",
            icon: "icon",
            path: "/"
        }
    ]
},
]

export default navFeatures