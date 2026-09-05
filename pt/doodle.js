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
    if (month == 6 && day == (9)) {
        googlelogo.src = "doodle/ptday.jpg";
        googlelogo.alt = "Portugues Dias";
    }
    if (month == 10 && day == 30) {
        googlelogo.src = "doodle/halloween.jpg";
        googlelogo.alt = "Trick or Treat";
    }
    if (month == 10 && day == 31) {
        googlelogo.src = "doodle/halloween.jpg";
        googlelogo.alt = "Trick or Treat";
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
