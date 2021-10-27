import React, {useState} from 'react';
import CollapseItem from './CollapseItem.jsx';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemButton from '@material-ui/core/ListItemButton';
// import Divider from '@mui/material/Divider';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


export default ({listItems})=>{
    const [open, setOpen] = useState(false);
    const handleClick = ()=>{
        setOpen(prev=>!prev)
    }
    return (<div style={{borderBottom:"lightgray 1px solid", padding:"1rem"}}>
        <ListItemIcon sx={{ pr: 8 }} onClick={handleClick}>
          <ListItemIcon>
            {/* <InboxIcon /> */}
          </ListItemIcon>
          <ListItemText style={{textAlign:"center"}} primary={`${listItems.title}`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <CollapseItem open={open} lists={listItems.lists} />
        
      </div>)
}