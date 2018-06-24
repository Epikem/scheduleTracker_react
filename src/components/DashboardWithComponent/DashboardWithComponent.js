import React from 'react';
import { Select, MenuItem, FormControl, withStyles, InputLabel} from '@material-ui/core';
const styles = theme => ({
  root: {
    backgroundColor: 'aliceblue',
    margin: 'auto',
    width:'80%',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  select:{
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class DashboardWithComponent extends React.Component {
  state = {
    week: ''
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  static propTypes = {

  }
  render = () =>{ 
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>This is dashboard with material-ui</div>
        <form>
          <FormControl className={classes.formControl}>
  
            <InputLabel htmlFor="week">Weeks</InputLabel>
            <Select
              value={this.state.week}
              onChange={this.handleChange}
              inputProps={{
                name: 'week',
                id: 'week',
              }}
              >
              <MenuItem value={1}>Week 1</MenuItem>
              <MenuItem value={2}>Week 2</MenuItem>
              <MenuItem value={3}>Week 3</MenuItem>
            </Select>
          </FormControl>
        </form>

      </div>
    )
  }
}

export default withStyles(styles)(DashboardWithComponent);
