import React,{Component} from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { browserHistory } from 'react-router';


 class Feature extends Component {

  render(){
    return <div> Protected feature route</div>
  }
}

function mapStatetoProps(state){
  return { authenticated:state.auth.authenticated };
}

export default connect(mapStatetoProps,actions)(Feature);
