import React from 'react';
// import List from '@mui/material/List';
import List from '@material-ui/core/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mu
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Collapse from '@mui/material/Collapse';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


export default ({ open, lists }) => {
    return (<Collapse in={open} timeout="auto" unmountOnExit>
        {lists.map((item, i) => {
            return (<List key={i} component="div" style={{ textAlign: "center" }} disablePadding>
                {/* <Link to={item.path} style={{ textDecoration: "none", color: "black" }}>
                    <ListItemLink sx={{ pl: 0 }} style={{ backgroundColor: "#F9F9F9" }} >
                        <ListItemText style={{ textAlign: "center" }} primary={`${item.listTitle}`} />
                    </ListItemLink>
                </Link> */}
                <ListItemLink sx={{ pl: 0 }} style={{ backgroundColor: "#F9F9F9" }} >
                    <ListItemText style={{ textAlign: "center" }} primary={`${item.listTitle}`} />
                </ListItemLink>
            </List>)
        })}

    </Collapse>)
}