export default {
	formatDate: function (dateString) {
		const dateObject = new Date(dateString);
		return dateObject.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
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
	},

	REMcolor: function (percentageDifference) {
		const grey = "#333333";
		const red = "#FF0000";
		const green = "#00FF00";

		if (percentageDifference > 0) {
			return green;
		} else if (percentageDifference === 0) {
			return grey;
		} else {
			return red;
		}
	},

	REMmsg: function (percentageDifference) {
		// compare rem times
		if (percentageDifference > 0) {
			console.log("Your most recent sleep was better than average by " + percentageDifference + "%!");
		} else if (percentageDifference < 0) {
			console.log("Your most recent sleep was worse than average by " + percentageDifference + "%");
		} else {
			console.log("Your most recent sleep was the same as your average.");
		}
	}
};