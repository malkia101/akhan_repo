
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
