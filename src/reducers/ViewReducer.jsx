import update from 'react-addons-update';

const View = (state = {}, action) => {

  switch (action.type){
  case 'view.SET.VIEWSTATE' :
    return update( state, {viewState: {$set: action.viewState}});
  default:
    return state;
  }
};

export default View;
