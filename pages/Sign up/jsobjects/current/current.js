export default {
  storeCurrentDateTime: () => {
    const formattedDate = new Date().toLocaleString();
    storeValue("currentDateTime", formattedDate);
    return formattedDate;
  },

  startUpdatingDateTime: () => setInterval(() => this.storeCurrentDateTime(), 1000),

  initialize: () => this.startUpdatingDateTime(),
};