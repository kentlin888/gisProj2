import * as React from 'react';
import MenuList from './MenuList';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
import List from '@material-ui/core/List';


export default ({ features, backgroundColor, color, width }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <List
      style={{ backgroundColor: `${backgroundColor}`, color: `${color}`}}
      sx={{ width: `${width}`,minHeight:"70vh", marginTop:"-0"}}
      component="nav"
    >
      {features.map((item, i) => {
        return (<div key={i}>
          <MenuList listItems={item} />
        </div>)
      })}

    </List>
  );
}