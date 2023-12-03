export default {
	transformStepData: function () {
		return getSteps.data.map(item => ({
			"x": dateUtils.formatDate(item.date),
			"y": item.stepCount
		}));
	},

	transformSleepData: function () {
		return getSleep.data.map(item => ({
			"x": dateUtils.formatDate(item.datetimeStarted),
			"y": item.REMTime
		}));
	},

	transformMacrosData: function () {
		const data = [];
		const calories = getMacros.data.map(item => ({
			"x": dateUtils.formatDate(item.date),
			"y": item.calorieCount
		}));
		data.push(calories);
		const protein = getMacros.data.map(item => ({
			"x": dateUtils.formatDate(item.date),
			"y": item.proteinCount
		}));
		data.push(protein);
		const carbs = getMacros.data.map(item => ({
			"x": dateUtils.formatDate(item.date),
			"y": item.carbCount
		}));
		data.push(carbs);
		const fats = getMacros.data.map(item => ({
			"x": dateUtils.formatDate(item.date),
			"y": item.fatCount
		}));
		data.push(fats);
		return data;
	}

};