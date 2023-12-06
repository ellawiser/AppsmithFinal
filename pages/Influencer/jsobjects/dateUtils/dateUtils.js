export default {
	formatDateForDB: function (dateString) {
		const dateObject = new Date(dateString);
		const year = dateObject.getUTCFullYear();
		const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0');
		const day = dateObject.getUTCDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	},

	formatDatetimeForDB: function (dateString) {
		const dateObject = new Date(dateString);
		const hours = dateObject.getUTCHours().toString().padStart(2, '0');
		const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
		const seconds = dateObject.getUTCSeconds().toString().padStart(2, '0');
		return `${this.formatDateForDB(dateString)} ${hours}:${minutes}:${seconds}`;
	},

	formatDate: function (dateString) {
		const dateObject = new Date(dateString);
		const options = { timeZone: 'UTC', month: '2-digit', day: '2-digit', year: 'numeric' };
		return dateObject.toLocaleDateString('en-US', options);
	}
};