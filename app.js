let btnShortenIt = document.getElementById('btnShortenIt');
let userUrl = document.getElementById('userUrl');

btnShortenIt.addEventListener('click', function () {
    // console.log(userUrl.value)
       fetch(`https://api.shrtco.de/v2/shorten?url=${userUrl.value}`)
        .then(response => response.json())
        .then(data => {
            arrangeData(data)
            // console.log(data)
        })
        .catch(err => alert("Wrong Value"))
})

function arrangeData(data) {
    let firstShortLink = data.result.short_link
    let secondShortLink = data.result.short_link2
    let thirdShortLink = data.result.short_link3
}