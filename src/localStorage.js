export const loadState = () => {
	try {
		const bookingData = localStorage.getItem('booking');
		if(bookingData === null) {
			return undefined;
		}
		return JSON.parse(bookingData);
	} catch (err) {
		return undefined;
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