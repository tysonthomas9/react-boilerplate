import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import styles1 from './styles1.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 25,

  },
  textField: {
    marginLeft: 40,
    marginRight: 40,
    width: 200,

  },
  button: {
     margin: theme.spacing.unit,

   },
   input: {
     display: 'none',
   },
   root: {
   flexGrow: 2,
   marginTop: 30,
   marginLeft: 100,
   padding: 10,
 },
 paper: {
   padding: 16,
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
});


class EditAccount extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  handleChange = prop => event => {

       this.setState({ [prop]: event.target.value });
       console.log(this.state);

  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.root}  align="center">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
            <TextField
              required
              id="username"
              label="Username"
              className={classes.textField}
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
              margin="normal"
            />

            <TextField
              required
              id="email"
              label="Email"
              className={classes.textField}
              type="text"
              onChange={this.handleChange('email')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              onChange={this.handleChange('password')}
              margin="normal"
            />

            <TextField
              required
              id="confirmpassword"
              label="Confirm Password"
              className={classes.textField}
              type="password"
              onChange={this.handleChange('confirmpassword')}
              margin="normal"
            />
            </Grid>
            <Grid item xs={6}>
              <div className={styles1.buttonpad}>
                <Button raised color="primary" className={classes.button}>
                  Edit
                </Button>
              <Button className={classes.button}>Cancel</Button>
            </div>

            </Grid>
          </Grid>
        </div>

      </form>
    );
  }
}

EditAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditAccount);
