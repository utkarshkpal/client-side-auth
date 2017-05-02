import React ,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import { browserHistory } from 'react-router';



function handleTouchTap() {
  browserHistory.push('/');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

 class Header extends Component {


  /*  handleSignOut(){

    console.log(this);
    console.log(this.props);

    //  this.props.signoutUser();
  }*/

  renderLinks(){
    //user loged in

    console.log('auth:'+this.props.authenticated);

    if(this.props.authenticated){
     return  (

        <FlatButton href="/signout" label= "Sign Out"/>

     );

    }else{

     return (
       <div>
         <FlatButton href = "/signin" label="Sign In" />
         <FlatButton href = "/signup" label="Sign Up" />
       </div>
     );

    }
  }

/*componentDidMount(){
  console.log(this.props.authenticated);

}*/

  render(){
    return(
      <MuiThemeProvider>
            <AppBar
          title={<span style={styles.title}>Welcome</span>}
          onTitleTouchTap={handleTouchTap}

          iconElementRight={this.renderLinks()}

      />
      </MuiThemeProvider>
    );
  }
}

function mapStatetoProps(state){
  return { authenticated:state.auth.authenticated };
}

export default connect(mapStatetoProps,actions)(Header);
