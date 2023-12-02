export default {
	formatDate: function(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  },

  transformStepData: () => {
    return getSteps.data.map(item => ({
      "x": this.formatDate(item.date),
      "y": item.stepCount
    }));
  },
	
	sleepData: [
    {
      "NREMTime": 12,
      "REMTime": 3,
      "datetimeEnded": "Fri, 10 Nov 2023 10:15:00 GMT",
      "datetimeStarted": "Thu, 09 Nov 2023 21:45:00 GMT",
      "id": 3
    },
    {
      "NREMTime": 12,
      "REMTime": 3,
      "datetimeEnded": "Sat, 11 Nov 2023 11:15:00 GMT",
      "datetimeStarted": "Fri, 10 Nov 2023 21:45:00 GMT",
      "id": 4
    }
  ],
	
	transformSleepData: () => {
    return getSleep.data.map(item => ({
      "x": getSleep.data(item.datetimeStarted),
      "y": item.REMTime
    }));
  },
	
	
};