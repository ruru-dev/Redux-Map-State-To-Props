import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

/**
 * This function will be used by the connect function below to convert the cars from our state
 * into props for our connected component.
 */
const mapStateToProps = (state) => ({ 
  cars: state.cars, 
  user: state.user
});

/**
 * Use the react-redux connect function to create a new version of our Dashboard component that is
 * "connected" to our redux store. 
 * 
 * This version will convert the cars in the redux state into props which are passed to the
 * component.
 */
export default connect(mapStateToProps)(Dashboard);