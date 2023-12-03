export default {
	put: function (info, defaultValue) {
		if (info === "" || info === null || info === "NaN-NaN-NaN") {
			return defaultValue;
		}
		return info;
	},

	statusToInt: function (status) {
		if (status === "not started") {
			return 25;
		} else if (status === "in progress") {
			return 40;
		} else if (status === "achieved") {
			return 100;
		} else {
			return 10;
		}
	}
};