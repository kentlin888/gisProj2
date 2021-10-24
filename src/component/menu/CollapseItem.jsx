import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
export default ({ open, lists }) => {
    return (<Collapse in={open} timeout="auto" unmountOnExit>
        {lists.map((item, i) => {
            return (<List key={i} component="div" style={{textAlign:"center"}} disablePadding>
                <ListItemButton sx={{ pl: 0 }}>
                    <ListItemText style={{textAlign:"center"}}  primary={`${item.listTitle}`} />
                </ListItemButton>
            </List>)
        })}

    </Collapse>)
}