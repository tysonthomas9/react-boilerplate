import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const options = [
  'Deactivate',
  'Edit',
  
];

const ITEM_HEIGHT = 48;


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class ManageAccount extends React.Component {
  state = {
     anchorEl: null,
   };

   handleClick = event => {
     this.setState({ anchorEl: event.currentTarget });
   };

   handleRequestClose = () => {
     this.setState({ anchorEl: null });
   };

render() {
  const open = Boolean(this.state.anchorEl);
  const { classes } = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell >Username</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >
              <div>
                <IconButton
                  aria-label="More"
                  aria-owns={open ? 'long-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={this.state.anchorEl}
                  open={open}
                  onRequestClose={this.handleRequestClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200,
                    },
                  }}
                >
                  {options.map(option => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleRequestClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell >{n.calories}</TableCell>
                <TableCell >{n.fat}</TableCell>
                <TableCell >{n.carbs}</TableCell>
                <TableCell >{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}
ManageAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageAccount);
