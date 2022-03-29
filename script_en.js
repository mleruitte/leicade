    var tofetch = document.getElementById("tofetch_en");
    fetch('toppage_en.html')
    .then((Response) => {
        return Response.text();
    })
    .then((html) => {
        tofetch.innerHTML = html
    });

