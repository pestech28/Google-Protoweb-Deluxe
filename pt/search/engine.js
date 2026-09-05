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
    titlecomp = "Pesquisa Google - " + result;
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
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Resultados: <b>0</b> em 0,486 seg</font>';
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p>A sua pesquisa - <b>" + result + "</b> - não encontrou correspondência em nenhum documento.</p>" +
                     "<p style='margin-top:15px;'>Sugestões:</p>" +
                     "<ul style='margin-left:20px;'>" +
                     "<li>Certifique-se de que todas as palavras estão bem escritas.</li>" +
                     "<li>Tente outras palavras-chave.</li>" +
                     "<li>Tente palavras-chave mais gerais.</li>" +
                     "<li>Tente utilizar menos palavras-chave.</li>" +
                     "</ul>" +
                     "</td></tr>";
        main.innerHTML = htmlBuffer; 
        return;
    }
    if (query === "ai" | query === "ai slop" | query === "skibidi" | query === "skibidi toilet" | query === "skibidi sigma") {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Resultados: <b>0</b> em 0,486 seg</font>';
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p>A sua pesquisa - <b>AI Slop</b> - não encontrou correspondência em nenhum documento.</p>" +
                     "<p style='margin-top:15px;'>Sugestões:</p>" +
                     "<ul style='margin-left:20px;'>" +
                     "<li>Certifique-se de que evita o brainrot.</li>" +
                     "<li>Tente ir lá fora apanhar ar.</li>" +
                     "<li>Tente aprender a programar.</li>" +
                     "<li>Tente falar com um humano.</li>" +
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
    restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Resultados: <b>' + restotal + '</b> em 0,486 seg</font>';
    if (hasres === 0) {
        restextcomp = '<font face="arial,sans-serif" size="-1" color="white">Resultados: <b>0</b> em 0,486 seg</font>';
        htmlBuffer = "<tr><td style='font-family:arial,sans-serif; font-size:small; padding:15px 0;'>" +
                     "<p>A sua pesquisa - <b>" + result + "</b> - não encontrou correspondência em nenhum documento.</p>" +
                     "<p style='margin-top:15px;'>Sugestões:</p>" +
                     "<ul style='margin-left:20px;'>" +
                     "<li>Certifique-se de que todas as palavras estão bem escritas.</li>" +
                     "<li>Tente outras palavras-chave.</li>" +
                     "<li>Tente palavras-chave mais gerais.</li>" +
                     "<li>Tente utilizar menos palavras-chave.</li>" +
                     "</ul>" +
                     "</td></tr>";
    }
    if (restext) { restext.innerHTML = restextcomp; }
    if (main) { main.innerHTML = "<table border='0' cellpadding='2' cellspacing='0'><tbody>" + htmlBuffer + "</tbody></table>"; }
}
