document.getElementById('akan-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;


// Validate the date and month
if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    alert("Please enter a valid date and month.");
    return;
}

// Calculate the century and year
const CC = Math.floor(year / 100);
const YY = year % 100;

// Day of the week calculation using the formula
const dayOfWeek = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY) / 4) + ((26 * (month + 1)) / 10) + day) % 7);


// Define Akan names based on gender and day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let akanName = "";
if (gender === 'male') {
    akanName = maleNames[dayOfWeek];
} else if (gender === 'female') {
    akanName = femaleNames[dayOfWeek];
}

// Display the Akan name
document.getElementById('result').textContent = `Your Akan name is ${akanName}`;
});
