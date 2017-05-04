import {axios} from 'axios';
export function userSignupRequest(userdata){
  return dispatch => {
    //console.log(userdata);
    return axios.post('/user',userdata);
  }
}
