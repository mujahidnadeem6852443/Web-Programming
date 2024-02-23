
function submitForm() {
    if (validateForm()) {
        const formData = getFormData();
        console.log(formData);
    }
}

function validateForm() {
    return true;
}

function getFormData() {
    const formData = {};
    formData.firstName = document.getElementById('firstName').value;
    formData.lastName = document.getElementById('lastName').value;
    formData.phoneNumber = document.getElementById('phoneNumber').value;
    formData.email = document.getElementById('email').value;
    formData.streetAddress = document.getElementById('streetAddress').value;
    formData.city = document.getElementById('city').value;
    formData.state = document.getElementById('state').value;
    formData.zipCode = document.getElementById('zipCode').value;
    formData.resume = document.getElementById('resume').value; 
    formData.coverLetter = document.getElementById('coverLetter').value;

    return formData;
}

function viewApplications() {
    const table = document.createElement('table');
    const formData = getFormData();

    const headerRow = table.insertRow(0);
    for (const key in formData) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    }

    const dataRow = table.insertRow(1);
    for (const key in formData) {
        const td = document.createElement('td');
        td.textContent = formData[key];
        dataRow.appendChild(td);
    }

    document.body.appendChild(table);
}
