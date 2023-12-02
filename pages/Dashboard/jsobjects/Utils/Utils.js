export default {
	formatDate: function (dateString) {
		const dateObject = new Date(dateString);
		return dateObject.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
	},
	
	formatDateForDB: function (dateString) {
		const dateObject = new Date(dateString);
		const year = dateObject.getUTCFullYear();
		const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0');
		const day = dateObject.getUTCDate().toString().padStart(2, '0');
		const hours = dateObject.getUTCHours().toString().padStart(2, '0');
		const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
		const seconds = dateObject.getUTCSeconds().toString().padStart(2, '0');
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	},

	transformStepData: function () {
		return getSteps.data.map(item => ({
			"x": this.formatDate(item.date),
			"y": item.stepCount
		}));
	},

	transformSleepData: function () {
		return getSleep.data.map(item => ({
			"x": this.formatDate(item.datetimeStarted),
			"y": item.REMTime
		}));
	}

};