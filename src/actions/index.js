import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';


export function signinUser({email,password}) {

return function(dispatch){

 axios.post(`${ROOT_URL}/signin`,{email,password})
 .then((response)=>{

   //Update state to indicate user is authenticated
   dispatch({type: AUTH_USER});

   //save jwt-token in local storage
   localStorage.setItem('token',response.data.token);

   //redirect to route '/feature'
   browserHistory.push('/feature');
 })
 .catch(()=>{
   dispatch(authError('Incorrect Username or Password'));
 });

 }

}

export function signupUser ({email,password}) {

  return function(dispatch){

    axios.post(`${ROOT_URL}/signup`,{email,password})

    .then((response)=>{

      dispatch({type: AUTH_USER});

      //save jwt-token in local storage
      localStorage.setItem('token',response.data.token);

      //redirect to route '/feature'
      browserHistory.push('/feature');

    })
    .catch((error)=>{
  console.log(error)      
      //dispatch(authError('Email already in use'));

    });
  }
}

export function signoutUser(){

  return function(dispatch){

    dispatch({type:UNAUTH_USER});
  }

}

/*call function to update the state   */

export function authError(error){


  return{
    type:AUTH_ERROR,
    payload:error
  };

}
