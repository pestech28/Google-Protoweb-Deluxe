function doodle() {
    var googlelogo = document.getElementById("googlelogo");
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();  
    var year = date.getFullYear();
    var yearStr = year.toString();
    var lastDigit = yearStr.charAt(yearStr.length - 1);
    if (month == 1 && day == 1) {
        googlelogo.src = "doodle/newyear.gif";
        googlelogo.alt = "Happy New Year";
    }
    if (month == 1 && day == 21) {
        googlelogo.src = "doodle/chinesenewyear.jpg";
        googlelogo.alt = "Chinese New Year";
    }
    if (month == 2 && day == 13) {
        googlelogo.src = "doodle/valentinesday.jpg";
        googlelogo.alt = "Happy Valentines Day";
    }
    if (month == 2 && day == 14) {
        googlelogo.src = "doodle/valentinesday.jpg";
        googlelogo.alt = "Happy Valentines Day";
    }
    if (month == 2 && day == 20) {
        googlelogo.src = "doodle/chinesenewyear.jpg";
        googlelogo.alt = "Chinese New Year";
    }
    if (month == 2 && day == 29) {
        googlelogo.src = "doodle/leapyear.jpg";
        googlelogo.alt = "Leap Year";
    }
    if (month == 3 && day == 1) {
        googlelogo.src = "doodle/leapyear.jpg";
        googlelogo.alt = "Leap Year";
    }
    if (month == 3 && day == 17) {
        googlelogo.src = "doodle/stpatricksday.jpg";
        googlelogo.alt = "Happy St. Patricks Day";
    }
    if (month == 4 && day == 1) {
        googlelogo.src = "doodle/aprilfools.jpg";
        googlelogo.alt = "April Fools";
    }
    if (month == 4 && day == 22) {
        googlelogo.src = "doodle/earthday.jpg";
        googlelogo.alt = "Happy Earth Day";
    }
    if (month == 5 && day == 8) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 5 && day == 9) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 5 && day == 10) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 5 && day == 11) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 5 && day == 12) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 5 && day == 13) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 5 && day == 14) {
        googlelogo.src = "doodle/mothersday.jpg";
        googlelogo.alt = "Happy Mothers Day";
    }
    if (month == 6 && day == 15) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 6 && day == 16) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 6 && day == 17) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 6 && day == 18) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 6 && day == 19) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 6 && day == 20) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 6 && day == 21) {
        googlelogo.src = "doodle/fathersday.jpg";
        googlelogo.alt = "Happy Fathers Day";
    }
    if (month == 7 && day == 4) {
        googlelogo.src = "doodle/4thjuly.jpg";
        googlelogo.alt = "Happy Independence Day";
    }
    if (month == 10 && day == 30) {
        googlelogo.src = "doodle/halloween.jpg";
        googlelogo.alt = "Trick or Treat";
    }
    if (month == 10 && day == 31) {
        googlelogo.src = "doodle/halloween.jpg";
        googlelogo.alt = "Trick or Treat";
    }
    if (
        month == 11 &&
        (day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8) &&
        (lastDigit == "0" || lastDigit == "2" || lastDigit == "4" || lastDigit == "6" || lastDigit == "8")
    ) {
        googlelogo.src = "doodle/election.jpg";
        googlelogo.alt = "Election Time!";
    }
    if (month == 11 && day == 22) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 11 && day == 23) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 11 && day == 24) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 11 && day == 25) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 11 && day == 26) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 11 && day == 27) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 11 && day == 28) {
        googlelogo.src = "doodle/thanksgiving.jpg";
        googlelogo.alt = "Happy Thanksgiving";
    }
    if (month == 12 && day == 24) {
        googlelogo.src = "doodle/christmas.jpg";
        googlelogo.alt = "Merry Christmas";
    }
    if (month == 12 && day == 25) {
        googlelogo.src = "doodle/christmas.jpg";
        googlelogo.alt = "Merry Christmas";
    }
    if (month == 12 && day == 26) {
        googlelogo.src = "doodle/christmas.jpg";
        googlelogo.alt = "Merry Christmas";
    }
    if (month == 12 && day == 29) {
        googlelogo.src = "doodle/newyear.gif";
        googlelogo.alt = "Happy New Year";
    }
    if (month == 12 && day == 30) {
        googlelogo.src = "doodle/newyear.gif";
        googlelogo.alt = "Happy New Year";
    }
    if (month == 12 && day == 31) {
        googlelogo.src = "doodle/newyear.gif";
        googlelogo.alt = "Happy New Year";
    }
}
