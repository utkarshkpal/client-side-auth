import React ,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';


 class Signup extends Component {

   handleFormSubmit({email,password})
   {
     
     this.props.signupUser({email,password});
   }

   renderAlert(props){

     if(this.props.errorMessage){

       return(
         <div className="alert alert-danger"><strong>{this.props.errorMessage}</strong></div>
       );
     }

   }

  render(){
    const { handleSubmit,fields: { email,password,confirmPassword }} = this.props;
   return (

     <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <br />
         <fieldset className={`form-group ${ email.touched && email.invalid ?'has-danger':''}`} >
            <label>Email:</label>
            <input {...email} className="form-control" />
            <div className="text-help">
           {email.touched ? email.error:''}      {/* this not the errors object we created, title has bulit in error property*/}
          </div>
         </fieldset>

         <fieldset className={`form-group ${ password.touched && password.invalid ?'has-danger':''}`} >
            <label>Password:</label>
            <input type="password" {...password} className="form-control" />
            <div className="text-help">
           {password.touched ? password.error:''}      {/* this not the errors object we created, title has bulit in error property*/}
          </div>
         </fieldset>

         <fieldset className={`form-group ${ confirmPassword.touched && confirmPassword.invalid ?'has-danger':''}`}>
            <label>Confirm Password:</label>
            <input type="password" {...confirmPassword} className="form-control" />
            <div className="text-help">
           {confirmPassword.touched ? confirmPassword.error:''}      {/* this not the errors object we created, title has bulit in error property*/}
          </div>
         </fieldset>
         <br />
         {this.renderAlert()}
         <button action="submit" className="btn btn-primary">Sign up</button>
    </form>

   );
       /**/

  }
}

function validate(values) {

 const errors = {};

 if(!values.email){
   errors.email="Enter an email";
 }

 if(!values.password){
   errors.password="Enter Password";
 }

 if(!values.confirmPassword){
   errors.confirmPassword="Enter Password again";
 }

 if(values.password!=values.confirmPassword)
 {
   errors.confirmPassword="Passwords dont match! Try again!"
 }

 return errors;
}


function mapStatetoProps(state){
  return { errorMessage:state.auth.error };
}

export default reduxForm({
  form:'signup',
  fields:['email','password','confirmPassword'],
  validate
},mapStatetoProps,actions)(Signup);
