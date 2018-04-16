import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import bookingReducer from './reducerBooking';

const rootReducer = combineReducers({
	booking: bookingReducer,
	form: formReducer
});
export default rootReducer;