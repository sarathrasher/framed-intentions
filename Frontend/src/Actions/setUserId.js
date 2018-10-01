import { connect } from 'react-redux';

let setUserId = props => {
  props.dispatch({ type: 'SET_USER_ID', userId: props.userId });
}

let SmartSetUserId = connect(state => ({ dispatch: state.dispatch }))(setUserId)

export default SmartSetUserId;