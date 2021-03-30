    var tofetch = document.getElementById("tofetch");
    fetch('test2.html')
    .then((Response) => {
        return Response.text();
    })
    .then((html) => {
        tofetch.innerHTML = html
    });