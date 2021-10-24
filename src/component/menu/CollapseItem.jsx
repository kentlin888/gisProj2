import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {Link} from 'react-router-dom'
export default ({ open, lists }) => {
    return (<Collapse in={open} timeout="auto" unmountOnExit>
        {lists.map((item, i) => {
            return (<List key={i} component="div" style={{ textAlign: "center" }} disablePadding>
                <Link to={item.path} style={{textDecoration:"none", color:"black"}}>
                    <ListItemButton sx={{ pl: 0 }} style={{ backgroundColor: "#F9F9F9" }} >
                        <ListItemText style={{ textAlign: "center" }} primary={`${item.listTitle}`} />
                    </ListItemButton>
                </Link>
            </List>)
        })}

    </Collapse>)
}