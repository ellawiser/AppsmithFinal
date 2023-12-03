export default {
	formatDate: (inputDate) => {
		const date = new Date(inputDate);
		const year = date.getUTCFullYear();
		const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
		const day = date.getUTCDate().toString().padStart(2, '0');

		return `${year}-${month}-${day}`;
	},

	compareFormDataWithQuery: () => {
		// Get the queried data from the data store
		const queriedData = getUser.data;
		const qfirstName = queriedData.firstName;
		const qlastName = queriedData.lastName;
		const qbirthday = this.formatDate(queriedData.birthday);
		const qphone = queriedData.phone;

		// Get the form data
		const formData = log_in.formData;
		const ffirstName = formData["first name"];
		const flastName = formData["last name"];
		const fbirthday = formData.birthday;
		const fphone = formData["phone number"];

		if (
			qfirstName === ffirstName &&
			qlastName === flastName &&
			qbirthday === fbirthday &&
			qphone === fphone
		) {
			// All form fields match the query data
			console.log('All fields match');
			storeValue("user", queriedData, true);
			return true;
		} else {
			// At least one field doesn't match, handle accordingly
			console.log('Fields do not match');
			console.log(qfirstName);
			console.log(ffirstName);
			console.log(qlastName);
			console.log(flastName);
			console.log(qbirthday);
			console.log(fbirthday);
			console.log(qphone);
			console.log(fphone);
			return false;
		}
	},

	isDataMatching: () => {
		// Call the function when the button is clicked or form is submitted
		const result = this.compareFormDataWithQuery();

		if (result) {
			showAlert("Success! You are logged in.", "success");
			navigateTo("Dashboard", {}, "SAME_WINDOW");
			return true;
		} else {
			showAlert("Fields do not match. Please ensure everything you entered is correct.", "error"); // Show error message
			return false;
		}
	}
};