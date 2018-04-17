import { CREATE_BOOKING, FETCH_BOOKING } from '../actions/actionBooking';

export default function (state = {}, action) {
	switch(action.type) {
		case FETCH_BOOKING:
			return action.payload;
		case CREATE_BOOKING:
			return action.payload;
		default:
			return state;
	}
}