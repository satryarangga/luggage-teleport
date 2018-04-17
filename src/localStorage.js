export const loadState = () => {
	try {
		const bookingData = localStorage.getItem('booking');
		if(bookingData === null) {
			return {};
		}
		return JSON.parse(bookingData);
	} catch (err) {
		return {};
	}
}

export const saveState = (booking) => {
	try {
		const bookingData = JSON.stringify(booking);
		localStorage.setItem('booking', bookingData)
	} catch (err) {
		return false;
	}
}