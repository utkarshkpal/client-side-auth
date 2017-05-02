import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import IndexBody from './indexbody';


export default class App extends Component {
  render() {
    return (
        <div>
         <Header />
          {this.props.children}
        </div>
    );
  }
}
