import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

 class Signin extends Component {


  handleFormSubmit({email,password})
  {
    this.props.signinUser({email,password});
  }

  renderAlert(props){

    if(this.props.errorMessage){

      return(
        <div className="alert alert-danger"><strong>{this.props.errorMessage}</strong></div>
      );
    }

  }


  render(){
   const {handleSubmit,fields: { email,password }} = this.props;
   return(

    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <br />
      <fieldset className="form-group">
       <label>Email:</label>
       <input {...email} className="form-control" />
      </fieldset>
      <fieldset className="form-group">
       <label>Password:</label>
       <input type="password" {...password} className="form-control" />
      </fieldset>
      {this.renderAlert()}
      <br />
    <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}



/*we have our errorMessage in our state but we want to use it in our component*/
function mapStatetoProps(state){
  return { errorMessage:state.auth.error };
}



export default reduxForm({
  form:'signin',
  fields:['email','password']
},mapStatetoProps,actions)(Signin);
