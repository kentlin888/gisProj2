import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const navFeatures = [{
    title: "Category 1",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "List A-1",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List A-2",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List A-3",
            icon: "icon",
            path: "/"
        }
    ]
},
{
    title: "Category 2",
    icon: <ListItemIcon/>,
    lists: [
        {
            listTitle: "List B-1",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List B-2",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List B-3",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List B-4",
            icon: "icon",
            path: "/"
        },
        {
            listTitle: "List B-5",
            icon: "icon",
            path: "/"
        }
    ]
},
{
    title: "Category 3",
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
}
]

export default navFeatures