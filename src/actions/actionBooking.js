import { saveState, loadState } from '../localStorage';

export const FETCH_BOOKING = 'fetch_booking';
export const CREATE_BOOKING = 'create_booking';

export function fetchBooking() {
	let booking = loadState();
	return {
		type: FETCH_BOOKING,
		payload: booking
	}
}

export function createBooking(values, callback) {
	saveState(values);
	return {
		type: CREATE_BOOKING,
		payload: values
	}
}