import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import TextField from 'material-ui/TextField';

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
  textField: {
    marginLeft: 40,
    marginRight: 40,
    width: 200,

  },
});

let id = 0;
function createData(state, name, device, image, command) {
  id += 1;
  return { id, state, name, device, image, command };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function searchingFor(searchText) {
  return function(s) {
    return s.state.toLowerCase().includes(searchText.toLowerCase()) || !searchText;
  };
}

class ContainersView extends React.Component {
  state = {
     anchorEl: null,
     searchText: '',
     items: data,
   };

   handleClick = event => {

     this.setState({ anchorEl: event.currentTarget });
   };


   handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });

        console.log(this.state.searchText, 'searchTextstate');
   }


  //  getResults() {
  //       //calltodb(searchText).then(e => {
  //         //  this.setState({searchResults: e.value})
  //
  //   }

   handleRequestClose = () => {
     this.setState({ anchorEl: null });
   };

  //  doSearch(searchText) {
  //        console.log(searchText);
  //        //get query result
  //        let queryResult: [];
  //        this.props.data.forEach((person) => {
  //            if (person.state.toLowerCase().indexOf(searchText) !== -1) {
  //            queryResult.push(person);
  //          }
  //        });
   //
  //        this.setState({
  //            query: searchText,
  //            filteredData: queryResult,
   //
  //        });
  //         console.log(this.state.filteredData);
  //    }
   //
  //    getInitialState() {
  //        return {
   //
  //            query: '',
  //            filteredData: undefined
  //        };
   //
  //    }

render() {
  const open = Boolean(this.state.anchorEl);
  const { classes } = this.props;

  return (
    <div>
      <div><TextField
          id="searchText"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          value={this.state.searchText}
          onChange={this.handleChange('searchText')}
        />
        {this.state.items.filter(searchingFor(this.state.searchText)).map((n) => {
          return (
            <div key={n.id}><h1>{n.state}</h1></div>
          );
        })}
      </div>

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell >State</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Device</TableCell>
            <TableCell >Image</TableCell>
            <TableCell >Command</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.state}</TableCell>
                <TableCell >{n.name}</TableCell>
                <TableCell >{n.device}</TableCell>
                <TableCell >{n.image}</TableCell>
                <TableCell >{n.command}</TableCell>
                <TableCell ><div>
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
                </div></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}
}
ContainersView.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.any,

};

export default withStyles(styles)(ContainersView);
