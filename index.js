document.getElementById('calculateBtn').addEventListener('click', calculateAge);

function calculateAge() {
    var birthdateInput = document.getElementById('birthdate').value;
    var targetdateInput = document.getElementById('targetdate').value;
    
    if (!birthdateInput || !targetdateInput) {
        alert("Please enter both birthdate and target date.");
        return;
    }

    var birthdate = new Date(birthdateInput);
    var targetdate = new Date(targetdateInput);

    if (targetdate < birthdate) {
        alert("Target date cannot be before birthdate.");
        return;
    }

    var birthYear = birthdate.getFullYear();
    var birthMonth = birthdate.getMonth();
    var birthDay = birthdate.getDate();

    var targetYear = targetdate.getFullYear();
    var targetMonth = targetdate.getMonth();
    var targetDay = targetdate.getDate();

    var years = targetYear - birthYear;
    var months = targetMonth - birthMonth;
    var days = targetDay - birthDay;

    if (days < 0) {
        months -= 1;
        var prevMonth = (targetMonth - 1 + 12) % 12;
        var daysInPrevMonth = new Date(targetYear, prevMonth + 1, 0).getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('result').innerText = "Your age on " + targetdate.toDateString() + " is: " + years + " years, " + months + " months, and " + days + " days.";
}
