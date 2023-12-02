export default {
	  originalData: [
    {
      "date": "Tue, 26 Nov 2019 00:00:00 GMT",
      "id": 8,
      "stepCount": 23425
    },
    {
      "date": "Mon, 17 Apr 2023 00:00:00 GMT",
      "id": 3,
      "stepCount": 13000
    }
  ],
	
  formatDate: (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  },

  transformData: () => {
    return this.originalData.map(item => ({
      "x": this.formatDate(item.date),
      "y": item.stepCount
    }));
  }
};