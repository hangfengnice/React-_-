import {connect} from 'react-redux'
import App from '../components/app'
import {
  incrementAction,
  decrementAction,
  asyncIncrementAction
} from "../redux/actions";


export default connect(
  state => ({
    count: state
  }),
  {
    incrementAction,
    decrementAction,
    asyncIncrementAction
  }
)(App);