'use strict';

const output = document.querySelector('.output');

if (output.innerText.includes('Yes')) {
	output.style.color = 'green';
} else if (output.innerText.includes('No')) {
	output.style.color = 'red';
}

let form_being_submitted = false;

const checkForm = function (form) {
	if (form_being_submitted) {
		alert('The form is being submitted, please wait a moment...');
		form.myButton.disabled = true;
		return false;
	}

	const dataArr = [...new FormData(document.querySelector('.loan-form'))];
	const data = Object.fromEntries(dataArr);
	console.log(data);

	if (
		data.gender == '-- select gender --' ||
		data.married == '-- select married status --' ||
		data.dependents == '-- select dependents --' ||
		data.education == '-- select education --' ||
		data.employed == '-- select Self_Employed --' ||
		data.credit == '-- select Credit_History --' ||
		data.area == '-- select Property_Area --' ||
		data.ApplicantIncome == '' ||
		data.CoapplicantIncome == '' ||
		data.LoanAmount == '' ||
		data.Loan_Amount_Term == ''
	) {
		alert('please fill the form fields before submitting');
		return false;
	}

	form.myButton.value = 'Submitting form...';
	form_being_submitted = true;
	return true; /* submit form */
};

const resetForm = function (form) {
	form.myButton.disabled = false;
	form.myButton.value = 'Submit';
	form_being_submitted = false;
};
