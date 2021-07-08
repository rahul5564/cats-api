var btn = document.getElementById('button').addEventListener('click',click);
var img = document.getElementById('images');

img.src = 'https://i.ytimg.com/vi/jHWKtQHXVJg/maxresdefault.jpg';
img.style.width = '950px'
img.style.height = '480px'

function click(){
    var url = 'https://thatcopy.pw/catapi/rest/';
    fetch(url).then((resp) => {
        return resp.json();
    }).then((final) => {
        img.src = final.url;
        img.style.width = '950px'
        img.style.height = '480px'
    }).catch((err) =>{
        img.alt = `${err} No Img Click Again`
    })
}
