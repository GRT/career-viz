import update from 'react-addons-update';

const Data = (state = {}, action) => {

  switch (action.type){
  case 'data.SET.JOBLISTRES' :
    return update( state, {jobListRes: {$set: action.jobListRes}});
  default:
    return state;
  }
};

export default Data;
