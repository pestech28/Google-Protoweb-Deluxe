function getrestext() {
        try {
            var currentUrl = window.location.href;
            var urlsplit1 = currentUrl.split("?q=");
            var perc90 = urlsplit1[1] ;
            var urlsplit2 = perc90.split("&");
            var result = urlsplit2[0];
            result = result.replace(/\+/g, " ");
            return result;
        }
        catch (e) {
            result = "";
            return result;
        }
} 

function addres(result) {
    var searchbox = document.getElementById("searchbox");
    var searchtext = document.getElementById("searchtext");
    var imgurl = document.getElementById("imgurl");
    comphref = "../search/?q=" + result;
    compimghref = "../img/search/?q=" + result;
    searchbox.href = comphref;
    searchbox.value = result;
    searchtext.innerHTML = result;
    imgurl.href = compimghref;
    titlecomp = "Google Search - " + result;
    document.title = titlecomp;
} 

function findres(db, result) {
    var main = document.getElementById("main");
    var restext = document.getElementById("restext");
    var hasres = 0;
    var restotal = 0;
    var htmlBuffer = ""; 
    var query = result.toLowerCase();
    var restextcomp = ""; 
    if (query === "") {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Results: <b>0</b> in 0.486 sec</font>';
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p>Your search - <b>" + result + "</b> - did not match any documents.</p>" +
                     "<p style='margin-top:15px;'>Suggestions:</p>" +
                     "<ul style='margin-left:20px;'>" +
                     "<li>Make sure all words are spelled correctly.</li>" +
                     "<li>Try different keywords.</li>" +
                     "<li>Try more general keywords.</li>" +
                     "<li>Try fewer keywords.</li>" +
                     "</ul>" +
                     "</td></tr>";
        main.innerHTML = htmlBuffer; 
        return;
    }
    if (query === "find chuck norris") {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Results: <b>0</b> in 0.486 sec</font>';
        if (restext) { restext.innerHTML = restextcomp; }
        
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p style='color:#cc0000; font-size:medium; font-weight: 100;'><b>Google won't search for <span style='color:#cc0000; font-weight: 800;'>Chuck Norris</span> because it knows you don't find <span style='color:#cc0000; font-weight: 800;'>Chuck Norris</span>, he finds you.</b></p><br>" +
                     "<p>No standard web pages containing all your search terms were found.</p><br>" +
                     "<p>Your search - <b>" + result + "</b> - did not match any documents.</p>" +
                     "<p style='margin-top:15px;'>Suggestions:</p>" +
                     "<ul style='margin-left:20px; font-weight:bold;'>" +
                     "<li>Run, before he finds you</li>" +
                     "<li>Try a different person</li>" +
                     "</ul>" +
                     "</td></tr>";
        if (main) { main.innerHTML = "<table border='0' cellpadding='2' cellspacing='0'><tbody>" + htmlBuffer + "</tbody></table>"; }
        return;
    }
    if (query === "ai" | query === "ai slop" | query === "skibidi" | query === "skibidi toilet" | query === "skibidi sigma") {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Results: <b>0</b> in 0.486 sec</font>';
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p>Your search - <b>AI Slop</b> - did not match any documents.</p>" +
                     "<p style='margin-top:15px;'>Suggestions:</p>" +
                     "<ul style='margin-left:20px;'>" +
                     "<li>Make sure you avoid brainrot.</li>" +
                     "<li>Try touching grass.</li>" +
                     "<li>Try to learn to code.</li>" +
                     "<li>Try to talk to a human.</li>" +
                     "</ul>" +
                     "</td></tr>";
        if (restext) { restext.innerHTML = restextcomp; }
        if (main) { main.innerHTML = "<table border='0' cellpadding='2' cellspacing='0'><tbody>" + htmlBuffer + "</tbody></table>"; }
        return;
    }
    for (var i = 0; i < db.length; i++) {
        if (db[i] && db[i][3]) {
            var tags = db[i][3].toLowerCase();
            if (tags.indexOf(query) !== -1) {
                var url = db[i][0];
                var urlname = db[i][1];
                var urldesc = db[i][2];
                hasres = 1;
                restotal = restotal + 1;
                htmlBuffer += "<tr><td>" +
                              "<a href='" + url + "' style='color:#0000cc; font-size:medium; font-family:arial,sans-serif;'>" + urlname + "</a><br>" + 
                              "<span style='color:#008000; font-size:small; font-family:arial,sans-serif;'>" + url + "</span><br>" + 
                              "<span style='color:#000000; font-size:small; font-family:arial,sans-serif;'>" + urldesc + "</span><br><br>" +
                              "</td></tr>";
            }
        }
    }
    
    restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Results: <b>' + restotal + '</b> in 0.486 sec</font>';
    
    if (hasres === 0) {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Results: <b>0</b> in 0.486 sec</font>';
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p>Your search - <b>" + result + "</b> - did not match any documents.</p>" +
                     "<p style='margin-top:15px;'>Suggestions:</p>" +
                     "<ul style='margin-left:20px;'>" +
                     "<li>Make sure all words are spelled correctly.</li>" +
                     "<li>Try different keywords.</li>" +
                     "<li>Try more general keywords.</li>" +
                     "<li>Try fewer keywords.</li>" +
                     "</ul>" +
                     "</td></tr>";
    }
    if (restext) { restext.innerHTML = restextcomp; }
    if (main) { main.innerHTML = "<table border='0' cellpadding='2' cellspacing='0'><tbody>" + htmlBuffer + "</tbody></table>"; }
}

