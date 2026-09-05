function getrestext() {
        try {
            var currentUrl = window.location.href;
            var urlsplit1 = currentUrl.split("?q=");
            var perc90 = urlsplit1[1] ;
            var urlsplit2 = perc90.split("&");
            var result = urlsplit2[0];
            result = result.replace(/\+/g, " ");
            result = decodeURIComponent(result);
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
    comphref = "../../search/?q=" + result;
    compimghref = "../img/search/?q=" + result;
    weburl.href = comphref
    searchbox.href = comphref;
    searchbox.value = result;
    searchtext.innerHTML = result;
    imgurl.href = compimghref;
    titlecomp = "Google Image Search - " + result;
    document.title = titlecomp;
} 

function findres(db, result) {
    var main = document.getElementById("main");
    var restext = document.getElementById("restext");
    
    // Safely emulate string trimming using an ES3 regex expression (IE6 compatible)
    var query = result.replace(/^\s+|\s+$/g, "").toLowerCase();
    
    var restotal = 0;
    var htmlBuffer = ""; 
    var restextcomp = ""; 

    // 1. Handle Empty Queries
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
                     
        if (restext) { restext.innerHTML = restextcomp; }
        if (main) { main.innerHTML = "<table border='0' cellpadding='2' cellspacing='0'><tbody>" + htmlBuffer + "</tbody></table>"; }
        return;
    }

    // 2. Scan and Flag Blocked Keywords (No modern ES6 array methods)
    var isBrainrot = 0;
    var brainrotKeywords = ["ai", "ai slop", "skibidi", "skibidi toilet", "skibidi sigma"];
    for (var k = 0; k < brainrotKeywords.length; k++) {
        if (brainrotKeywords[k] === query) {
            isBrainrot = 1;
            break;
        }
    }

    if (isBrainrot === 1) {
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

    // 3. Process Array Query Loop and Build Layout Table Structure
    for (var i = 0; i < db.length; i++) {
        if (db[i] && db[i][3]) {
            var tags = db[i][3].toLowerCase();
            if (tags.indexOf(query) !== -1) {
                
                var imgUrl = db[i][0];   // Image file link location
                var webUrl = db[i][1];   // Target destination site website link
                var imgName = db[i][2];  // Item title string text description
                
                // Open a new structural row element exactly every 4 items
                if (restotal % 4 === 0) {
                    htmlBuffer += "<tr>";
                }
                
                restotal++;
                
                // Pure legacy HTML attributes (width/align/valign) handle perfect rendering in IE6
                htmlBuffer += "<td align='center' valign='bottom' width='25%' style='font-family:arial,sans-serif; padding:15px 10px;'>" +
                              "<a href='" + imgUrl + "' target='_blank'>" +
                              "<img src='" + imgUrl + "' width='120' height='120' border='1' style='border-color:#3366cc; margin-bottom:6px;' alt='Result'><br>" +
                              "</a>" +
                              "<a href='" + webUrl + "' style='color:#008000; font-size:10pt; text-decoration:underline;'>" + webUrl + "</a><br>" + 
                              "<span style='color:#000000; font-size:10pt;'> " + imgName + "</span>" +
                              "</td>";
                
                // Close structural columns layout row after 4 iterations
                if (restotal % 4 === 0) {
                    htmlBuffer += "</tr>";
                }
            }
        }
    }
    
    // Safety check to close uncompleted rows if total records aren't divisible by 4
    if (restotal > 0 && restotal % 4 !== 0) {
        htmlBuffer += "</tr>";
    }
    
    // 4. Evaluate Layout Buffers
    if (restotal === 0) {
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
    } else {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Results: <b>' + restotal + '</b> in 0.486 sec</font>';
    }

    // 5. Final Target Rendering Wrapper inside the Main Div
    if (restext) { restext.innerHTML = restextcomp; }
    if (main) { 
        // Generates the clean outer table block and injects it cleanly
        main.innerHTML = "<table width='100%' border='0' cellpadding='2' cellspacing='0'><tbody>" + htmlBuffer + "</tbody></table>"; 
    }
}
