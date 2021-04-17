    var tofetch = document.getElementById("tofetch");
    fetch('toppage.html')
    .then((Response) => {
        return Response.text();
    })
    .then((html) => {
        tofetch.innerHTML = html
    });

