import React, {useState} from 'react';
import CollapseItem from './CollapseItem.jsx';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
export default ({listItems})=>{
    const [open, setOpen] = useState(false);
    const handleClick = ()=>{
        setOpen(prev=>!prev)
    }
    return (<div style={{borderBottom:"lightgray 1px solid", padding:"1rem"}}>
        <ListItemButton sx={{ pr: 8 }} onClick={handleClick}>
          <ListItemIcon>
            {/* <InboxIcon /> */}
          </ListItemIcon>
          <ListItemText style={{textAlign:"center"}} primary={`${listItems.title}`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <CollapseItem open={open} lists={listItems.lists} />
        
      </div>)
}