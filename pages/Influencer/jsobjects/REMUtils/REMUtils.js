export default {
	compareREMTime: function () {
		const sleepData = getSleep.data.sort((a, b) => new Date(b.datetimeStarted) - new Date(a.datetimeStarted));
		const mostRecentREMTime = sleepData[0].REMTime;
		const averageREMTime = sleepData.reduce((total, entry) => total + entry.REMTime, 0) / sleepData.length;
		const percentageDifference = ((mostRecentREMTime - averageREMTime) / averageREMTime) * 100;
		return Math.round(percentageDifference * 100) / 100;
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
			return "Your most recent sleep was better than average by " + percent + "%!";
		} else if (percent < 0) {
			return "Your most recent sleep was worse than average by " + percent + "%";
		} else {
			return "Your most recent sleep was the same as your average.";
		}
	}
}