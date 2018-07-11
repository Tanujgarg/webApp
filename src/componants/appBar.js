import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Input from '@material-ui/core/Input';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
    state = {
        left: false,
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    render(){
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List component="nav">
                  <ListItem button component="a" href="/">
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Inbox'/>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                </List>
              <Divider />
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Spam" />
                </ListItem>
              </List>
            </div>
          );      
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
			<div
				tabIndex={0}
				role="button"
				onClick={this.toggleDrawer('left', false)}
				onKeyDown={this.toggleDrawer('left', false)}
			>
				{sideList}
			</div>
			</Drawer>

                <Typography variant="title" color="inherit" className={classes.flex}>
                    WebApp
                </Typography>

                <Button color="inherit">Login</Button>
                <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
            </div>
            );
    }   
    
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
