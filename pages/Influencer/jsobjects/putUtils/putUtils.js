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
	},

	getGoalID: function(username, description) {
    for (const goal of getGoals.data) {
      if (goal.username === username && goal.description === description) {
        return goal.id;
      }
    }
		throw new Error(`Goal with username '${username}' and description '${description}' not found.`);
	}
};