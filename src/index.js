document.getElementById('akan-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    if (day <= 0 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (month <= 0 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }

    // Calculate century and year digits
    const century = Math.floor(year / 100);
    const yearDigits = year % 100;

    // Calculate the day of the week 
    const dayOfWeek = Math.floor(((century / 4) - 2 * century - 1) + (5 * yearDigits / 4) + (26 * (month + 1) / 10) + day) % 7;

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Determine Akan name based on gender and day of the week
    let akanName;
    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfWeek];
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your Akan name is ${akanName}`;
});
