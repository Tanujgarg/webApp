import React, { Component } from 'react';
import AppBar from './componants/appBar';
import  { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const theme = createMuiTheme({
  palette: {
      primary: {
          light: "#7d5b58",
          main: "#50312f",
          dark: "#270a05",
          contrastText: "#fff"
      },
      secondary: {
          light: "#cafff9",
          main: "#98dbc6",
          dark: "#68a995",
          contrastText: "#595959"
      }
  }
}
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar />
          <br/>
          <LinearProgress/>
          <Button>Hello</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
