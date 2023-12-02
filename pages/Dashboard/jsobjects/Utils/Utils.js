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
	
	compareREMTime: function () {
		const sleepData = getSleep.data.sort((a, b) => new Date(b.datetimeStarted) - new Date(a.datetimeStarted));
		const mostRecentREMTime = sleepData[0].REMTime;
		const averageREMTime = sleepData.reduce((total, entry) => total + entry.REMTime, 0) / sleepData.length;
		const percentageDifference = ((mostRecentREMTime - averageREMTime) / averageREMTime) * 100;
		return percentageDifference;
	},

	REMcolor: function () {
		const percent = this.compareREMTime();
		const grey = "#333333";
		const red = "#FF0000";
		const green = "#00FF00";

		if (percent > 0) {
			return green;
		} else if (percent === 0) {
			return grey;
		} else {
			return red;
		}
	},

	REMmsg: function () {
		const percent = this.compareREMTime();
		// compare rem times
		if (percent > 0) {
			console.log("Your most recent sleep was better than average by " + percent + "%!");
		} else if (percent < 0) {
			console.log("Your most recent sleep was worse than average by " + percent + "%");
		} else {
			console.log("Your most recent sleep was the same as your average.");
		}
	}
};