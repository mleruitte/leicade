    var tofetch = document.getElementById("tofetch");
    fetch('toppage.html')
    .then((Response) => {
        return Response.text();
    })
    .then((html) => {
        tofetch.innerHTML = html
    });


    var tofetchfooter = document.getElementById("tofetchfooter");
    fetch('footer.html')
    .then((Response) => {
        return Response.text();
    })
    .then((html) => {
        tofetch.innerHTML = html
    });