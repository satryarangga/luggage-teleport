export const FETCH_BOOKING = 'fetch_booking';
export const CREATE_BOOKING = 'create_booking';

export function fetchBooking() {
	return {
		type: FETCH_BOOKING,
		payload: {}
	}
}

export function createBooking(values, callback) {
	return {
		type: CREATE_BOOKING,
		payload: values
	}
}
